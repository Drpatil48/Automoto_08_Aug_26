const searchInput = document.getElementById("topSearch");
const suggestionsEl = document.getElementById("searchSuggestions");
const trendingGrid = document.getElementById("trendingGrid");
const trendingCarTab = document.getElementById("trendingCarTab");
const trendingBikeTab = document.getElementById("trendingBikeTab");
const updatesList = document.getElementById("updatesList");
const vehiclesGrid = document.getElementById("vehiclesGrid");
const categoryFilter = document.getElementById("categoryFilter");
const fuelFilter = document.getElementById("fuelFilter");
const budgetFilter = document.getElementById("budgetFilter");
const applyFiltersBtn = document.getElementById("applyFilters");
const leftCompare = document.getElementById("leftCompare");
const rightCompare = document.getElementById("rightCompare");
const runCompareBtn = document.getElementById("runCompare");
const compareResult = document.getElementById("compareResult");
const onRoadVehicle = document.getElementById("onRoadVehicle");
const citySelect = document.getElementById("citySelect");
const calcOnRoad = document.getElementById("calcOnRoad");
const onRoadResult = document.getElementById("onRoadResult");

let allVehicles = [];
let trendingVehicles = [];
let activeTrendingTab = "Car";

async function fetchFeatured() {
  const response = await fetch("/api/featured");
  const data = await response.json();
  trendingVehicles = data.trending || [];
  renderTrending();

  updatesList.innerHTML = data.updates
    .map((item) => `<li><strong>${item.type}:</strong> ${item.title}</li>`)
    .join("");
}

function renderTrending() {
  const items = trendingVehicles
    .filter((item) => item.category === activeTrendingTab)
    .slice(0, 6);

  if (!items.length) {
    trendingGrid.innerHTML = `<article class="card"><h3>No trending ${activeTrendingTab.toLowerCase()} vehicles yet</h3></article>`;
    return;
  }

  trendingGrid.innerHTML = items
    .map((item) => {
      return `
        <article class="card trend-card">
          <div class="trend-image-wrap">
            <img class="trend-image" src="${item.imageUrl || "https://via.placeholder.com/400x230?text=Vehicle"}" alt="${item.name}">
          </div>
          <div class="trend-body">
            <h3>${item.name}</h3>
            <small class="variant-text">+${item.variants || 1} Variants</small>
            <div class="spec-row">
              <span>${item.fuelOptions || item.fuel || "-"}</span>
              <span>${item.transmissionOptions || item.transmission || "-"}</span>
              <span>${item.efficiency || item.range || "-"}</span>
            </div>
            <div class="price-row">
              <div>
                <label>Ex-Showroom</label>
                <strong>${item.displayPrice}</strong>
              </div>
              <div>
                <label>EMI starts at</label>
                <strong>INR ${(item.emiStart || 0).toLocaleString("en-IN")}</strong>
              </div>
            </div>
            <div class="action-row">
              <button class="action-btn light" data-offer="${item.slug}" type="button">Get Offers</button>
              <button class="action-btn yellow" data-onroad="${item.slug}" type="button">Check On-Road Price</button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderVehicles(items) {
  if (!items.length) {
    vehiclesGrid.innerHTML = `<article class="card"><h3>No matching vehicles</h3></article>`;
    return;
  }
  vehiclesGrid.innerHTML = items
    .map((item) => {
      return `
        <article class="card">
          <h3>${item.name}</h3>
          <p>${item.brand} | ${item.category} | ${item.fuel}</p>
          <p>${item.displayPrice} | ${item.range}</p>
          <a class="link" href="#" data-detail="${item.slug}">View details</a>
        </article>
      `;
    })
    .join("");
}

function buildQuery() {
  const params = new URLSearchParams();
  if (categoryFilter.value) params.set("category", categoryFilter.value);
  if (fuelFilter.value) params.set("fuel", fuelFilter.value);
  if (budgetFilter.value) params.set("budgetMax", budgetFilter.value);
  return params.toString();
}

async function fetchVehicles() {
  const query = buildQuery();
  const response = await fetch(`/api/vehicles${query ? `?${query}` : ""}`);
  const data = await response.json();
  allVehicles = data.vehicles || [];
  renderVehicles(allVehicles);
  populateCompare(allVehicles);
}

function populateCompare(items) {
  const options = items
    .map((item) => `<option value="${item.slug}">${item.name}</option>`)
    .join("");
  leftCompare.innerHTML = options;
  rightCompare.innerHTML = options;
  onRoadVehicle.innerHTML = options;
  if (items.length > 1) {
    leftCompare.value = items[0].slug;
    rightCompare.value = items[1].slug;
    onRoadVehicle.value = items[0].slug;
  }
}

async function runCompare() {
  if (!leftCompare.value || !rightCompare.value) return;
  const response = await fetch(`/api/compare?left=${encodeURIComponent(leftCompare.value)}&right=${encodeURIComponent(rightCompare.value)}`);
  const data = await response.json();
  if (data.error) {
    compareResult.textContent = data.error;
    return;
  }
  compareResult.innerHTML = `
    <strong>${data.left.name}</strong> vs <strong>${data.right.name}</strong><br>
    Brand: ${data.left.brand} vs ${data.right.brand}<br>
    Category: ${data.left.category} vs ${data.right.category}<br>
    Price: ${data.left.displayPrice} vs ${data.right.displayPrice}<br>
    Range/Mileage: ${data.left.range} vs ${data.right.range}
  `;
}

async function runOnRoad() {
  const response = await fetch(`/api/on-road-price?slug=${encodeURIComponent(onRoadVehicle.value)}&city=${encodeURIComponent(citySelect.value)}`);
  const data = await response.json();
  if (data.error) {
    onRoadResult.textContent = data.error;
    return;
  }
  const b = data.breakdown;
  onRoadResult.innerHTML = `
    <strong>${data.vehicle} - ${data.city}</strong><br>
    Ex-showroom: ${b.exShowroom}<br>
    Road Tax: ${b.roadTax}<br>
    Insurance: ${b.insurance}<br>
    Handling: ${b.handling}<br>
    <strong>Total: ${b.total}</strong>
  `;
}

async function showDetails(slug) {
  const response = await fetch(`/api/vehicles/${encodeURIComponent(slug)}`);
  const data = await response.json();
  if (!data.vehicle) return;
  const v = data.vehicle;
  window.alert(
    `${v.name}\nBrand: ${v.brand}\nCategory: ${v.category}\nFuel: ${v.fuel}\nPrice: ${v.displayPrice}\nRange/Mileage: ${v.range}`
  );
}

function hideSuggestions() {
  suggestionsEl.classList.add("hidden");
  suggestionsEl.innerHTML = "";
}

async function searchVehicles(query) {
  if (!query.trim()) {
    hideSuggestions();
    return;
  }

  const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
  const data = await response.json();
  const items = data.results || [];

  if (!items.length) {
    suggestionsEl.innerHTML = `<div class="suggestion-item">No results found</div>`;
    suggestionsEl.classList.remove("hidden");
    return;
  }

  suggestionsEl.innerHTML = items
    .map((item) => {
      return `
        <div class="suggestion-item">
          <strong>${item.name}</strong>
          <small>${item.category} | ${item.displayPrice} | ${item.range}</small>
        </div>
      `;
    })
    .join("");
  suggestionsEl.classList.remove("hidden");
}

let timeoutId;
searchInput.addEventListener("input", (event) => {
  clearTimeout(timeoutId);
  const value = event.target.value;
  timeoutId = setTimeout(() => searchVehicles(value), 180);
});

document.addEventListener("click", (event) => {
  const onRoadSlug = event.target.getAttribute("data-onroad");
  if (onRoadSlug) {
    event.preventDefault();
    onRoadVehicle.value = onRoadSlug;
    document.getElementById("onroad").scrollIntoView({ behavior: "smooth", block: "start" });
    runOnRoad();
    return;
  }

  const offerSlug = event.target.getAttribute("data-offer");
  if (offerSlug) {
    event.preventDefault();
    window.alert(`Lead form placeholder for: ${offerSlug.replaceAll("-", " ")}`);
    return;
  }

  const detailSlug = event.target.getAttribute("data-detail");
  if (detailSlug) {
    event.preventDefault();
    showDetails(detailSlug);
    return;
  }

  if (!event.target.closest(".search-wrap")) {
    hideSuggestions();
  }
});

applyFiltersBtn.addEventListener("click", fetchVehicles);
runCompareBtn.addEventListener("click", runCompare);
calcOnRoad.addEventListener("click", runOnRoad);
trendingCarTab.addEventListener("click", () => {
  activeTrendingTab = "Car";
  trendingCarTab.classList.add("active");
  trendingBikeTab.classList.remove("active");
  renderTrending();
});
trendingBikeTab.addEventListener("click", () => {
  activeTrendingTab = "Bike";
  trendingBikeTab.classList.add("active");
  trendingCarTab.classList.remove("active");
  renderTrending();
});

fetchFeatured();
fetchVehicles();
