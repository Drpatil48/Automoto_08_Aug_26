const fs = require("fs");
const path = require("path");
const { vehicles, updates } = require("./data");

const DB_PATH = path.join(__dirname, "db.json");

function ensureDb() {
  if (!fs.existsSync(DB_PATH)) {
    const initial = {
      vehicles,
      updates,
      cities: [
        { name: "Pune", roadTaxPct: 10, insurancePct: 3, handlingFee: 4500 },
        { name: "Mumbai", roadTaxPct: 11, insurancePct: 3.2, handlingFee: 5000 },
        { name: "Bengaluru", roadTaxPct: 10.5, insurancePct: 3.1, handlingFee: 4700 },
        { name: "Delhi", roadTaxPct: 9.5, insurancePct: 2.9, handlingFee: 4300 }
      ]
    };
    fs.writeFileSync(DB_PATH, JSON.stringify(initial, null, 2), "utf8");
    return;
  }

  const raw = fs.readFileSync(DB_PATH, "utf8");
  const existing = JSON.parse(raw);
  let dirty = false;

  if (!Array.isArray(existing.vehicles) || !existing.vehicles.length) {
    existing.vehicles = vehicles;
    dirty = true;
  } else {
    const seedBySlug = Object.fromEntries(vehicles.map((v) => [v.slug, v]));
    existing.vehicles = existing.vehicles.map((vehicle) => {
      const seed = seedBySlug[vehicle.slug];
      if (!seed) return vehicle;
      const merged = { ...seed, ...vehicle };
      merged.category = seed.category;
      merged.bodyType = seed.bodyType;
      merged.fuel = seed.fuel;
      if (!vehicle.fuelOptions) merged.fuelOptions = seed.fuelOptions;
      if (!vehicle.transmissionOptions) merged.transmissionOptions = seed.transmissionOptions;
      if (!vehicle.efficiency) merged.efficiency = seed.efficiency;
      if (!vehicle.variants) merged.variants = seed.variants;
      if (!vehicle.imageUrl) merged.imageUrl = seed.imageUrl;
      if (!vehicle.emiStart) merged.emiStart = seed.emiStart;
      return merged;
    });
    dirty = true;
  }

  if (dirty) {
    fs.writeFileSync(DB_PATH, JSON.stringify(existing, null, 2), "utf8");
  }
}

function readDb() {
  ensureDb();
  const raw = fs.readFileSync(DB_PATH, "utf8");
  return JSON.parse(raw);
}

function writeDb(data) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), "utf8");
}

module.exports = { readDb, writeDb, ensureDb };
