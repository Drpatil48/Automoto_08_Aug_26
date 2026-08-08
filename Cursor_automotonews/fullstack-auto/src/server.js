const express = require("express");
const cors = require("cors");
const path = require("path");
const { readDb, writeDb, ensureDb } = require("./db");

const app = express();
const port = process.env.PORT || 3000;
const adminKey = process.env.ADMIN_KEY || "automotonews-admin";

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));
ensureDb();

function slugify(input) {
  return String(input || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function formatInr(amount) {
  return `INR ${Math.round(amount).toLocaleString("en-IN")}`;
}

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.get("/api/featured", (_req, res) => {
  const db = readDb();
  res.json({
    trending: db.vehicles.slice(0, 6),
    updates: db.updates
  });
});

app.get("/api/search", (req, res) => {
  const db = readDb();
  const q = String(req.query.q || "").trim().toLowerCase();
  if (!q) {
    return res.json({ results: [] });
  }

  const results = db.vehicles
    .filter((item) => {
      return (
        item.name.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.brand.toLowerCase().includes(q) ||
        item.bodyType.toLowerCase().includes(q) ||
        item.displayPrice.toLowerCase().includes(q)
      );
    })
    .slice(0, 8);

  return res.json({ results });
});

app.get("/api/vehicles", (req, res) => {
  const db = readDb();
  const { category, brand, bodyType, fuel, budgetMax, q } = req.query;
  let filtered = [...db.vehicles];

  if (category) {
    filtered = filtered.filter((x) => x.category.toLowerCase() === String(category).toLowerCase());
  }
  if (brand) {
    filtered = filtered.filter((x) => x.brand.toLowerCase() === String(brand).toLowerCase());
  }
  if (bodyType) {
    filtered = filtered.filter((x) => x.bodyType.toLowerCase() === String(bodyType).toLowerCase());
  }
  if (fuel) {
    filtered = filtered.filter((x) => x.fuel.toLowerCase().includes(String(fuel).toLowerCase()));
  }
  if (budgetMax) {
    const max = Number(budgetMax);
    filtered = filtered.filter((x) => x.exShowroomPrice <= max);
  }
  if (q) {
    const text = String(q).toLowerCase();
    filtered = filtered.filter((x) => x.name.toLowerCase().includes(text));
  }

  return res.json({ vehicles: filtered });
});

app.get("/api/vehicles/:slug", (req, res) => {
  const db = readDb();
  const vehicle = db.vehicles.find((x) => x.slug === req.params.slug);
  if (!vehicle) {
    return res.status(404).json({ error: "Vehicle not found" });
  }
  return res.json({ vehicle });
});

app.get("/api/compare", (req, res) => {
  const db = readDb();
  const left = db.vehicles.find((x) => x.slug === req.query.left);
  const right = db.vehicles.find((x) => x.slug === req.query.right);
  if (!left || !right) {
    return res.status(400).json({ error: "Both left and right slugs are required" });
  }
  return res.json({ left, right });
});

app.get("/api/on-road-price", (req, res) => {
  const db = readDb();
  const vehicle = db.vehicles.find((x) => x.slug === req.query.slug);
  const city = db.cities.find((x) => x.name.toLowerCase() === String(req.query.city || "").toLowerCase());
  if (!vehicle || !city) {
    return res.status(400).json({ error: "Valid slug and city are required" });
  }
  const roadTax = (vehicle.exShowroomPrice * city.roadTaxPct) / 100;
  const insurance = (vehicle.exShowroomPrice * city.insurancePct) / 100;
  const total = vehicle.exShowroomPrice + roadTax + insurance + city.handlingFee;
  return res.json({
    vehicle: vehicle.name,
    city: city.name,
    breakdown: {
      exShowroom: formatInr(vehicle.exShowroomPrice),
      roadTax: formatInr(roadTax),
      insurance: formatInr(insurance),
      handling: formatInr(city.handlingFee),
      total: formatInr(total)
    }
  });
});

function requireAdmin(req, res, next) {
  const key = req.header("x-admin-key");
  if (key !== adminKey) {
    return res.status(401).json({ error: "Unauthorized admin key" });
  }
  return next();
}

app.post("/api/admin/vehicles", requireAdmin, (req, res) => {
  const db = readDb();
  const payload = req.body || {};
  if (!payload.name || !payload.brand || !payload.category) {
    return res.status(400).json({ error: "name, brand, category are required" });
  }
  const nextId = Math.max(0, ...db.vehicles.map((x) => x.id)) + 1;
  const created = {
    id: nextId,
    name: payload.name,
    category: payload.category,
    brand: payload.brand,
    bodyType: payload.bodyType || "Unknown",
    fuel: payload.fuel || "Unknown",
    fuelOptions: payload.fuelOptions || payload.fuel || "Unknown",
    transmission: payload.transmission || "Unknown",
    transmissionOptions: payload.transmissionOptions || payload.transmission || "Unknown",
    efficiency: payload.efficiency || payload.range || "-",
    variants: Number(payload.variants || 1),
    imageUrl: payload.imageUrl || "",
    exShowroomPrice: Number(payload.exShowroomPrice || 0),
    displayPrice: payload.displayPrice || formatInr(Number(payload.exShowroomPrice || 0)),
    range: payload.range || "-",
    emiStart: Number(payload.emiStart || 0),
    slug: slugify(payload.slug || payload.name)
  };
  db.vehicles.push(created);
  writeDb(db);
  return res.status(201).json({ vehicle: created });
});

app.put("/api/admin/vehicles/:id", requireAdmin, (req, res) => {
  const db = readDb();
  const id = Number(req.params.id);
  const index = db.vehicles.findIndex((x) => x.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Vehicle not found" });
  }
  db.vehicles[index] = { ...db.vehicles[index], ...req.body };
  writeDb(db);
  return res.json({ vehicle: db.vehicles[index] });
});

app.delete("/api/admin/vehicles/:id", requireAdmin, (req, res) => {
  const db = readDb();
  const id = Number(req.params.id);
  const before = db.vehicles.length;
  db.vehicles = db.vehicles.filter((x) => x.id !== id);
  if (db.vehicles.length === before) {
    return res.status(404).json({ error: "Vehicle not found" });
  }
  writeDb(db);
  return res.json({ ok: true });
});

app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`fullstack-auto running on http://localhost:${port}`);
});
