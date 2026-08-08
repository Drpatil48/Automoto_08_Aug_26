const tickerItems = [
  "EV registrations continue to accelerate across major Indian cities.",
  "Budget EV segment is seeing the strongest buyer demand this quarter.",
  "Compact SUVs remain the top searched category among new car buyers.",
  "Charging infrastructure expansion improves long-distance EV confidence."
];

const models = [
  { name: "Tata Nexon EV", type: "EV SUV", price: "14.5L", range: "465 km", fuel: "Electric" },
  { name: "MG ZS EV", type: "EV SUV", price: "18.9L", range: "461 km", fuel: "Electric" },
  { name: "Hyundai Creta Petrol", type: "SUV", price: "11.1L", range: "17 kmpl", fuel: "Petrol" },
  { name: "Mahindra XUV 3XO", type: "SUV", price: "7.5L", range: "20 kmpl", fuel: "Petrol/Diesel" },
  { name: "Ather 450X", type: "E-Scooter", price: "1.4L", range: "150 km", fuel: "Electric" },
  { name: "TVS Jupiter", type: "Scooter", price: "0.78L", range: "55 kmpl", fuel: "Petrol" }
];

const tickerText = document.getElementById("tickerText");
const modelA = document.getElementById("modelA");
const modelB = document.getElementById("modelB");
const compareButton = document.getElementById("compareButton");
const compareResult = document.getElementById("compareResult");
const menuButton = document.getElementById("menuButton");
const siteNav = document.getElementById("siteNav");
const newsletterForm = document.getElementById("newsletterForm");
const formMessage = document.getElementById("formMessage");

let tickerIndex = 0;

function startTicker() {
  tickerText.textContent = tickerItems[tickerIndex];
  setInterval(() => {
    tickerIndex = (tickerIndex + 1) % tickerItems.length;
    tickerText.textContent = tickerItems[tickerIndex];
  }, 3200);
}

function populateModelSelects() {
  models.forEach((model, index) => {
    const optionA = document.createElement("option");
    optionA.value = String(index);
    optionA.textContent = model.name;
    modelA.appendChild(optionA);

    const optionB = document.createElement("option");
    optionB.value = String(index);
    optionB.textContent = model.name;
    modelB.appendChild(optionB);
  });

  modelA.value = "0";
  modelB.value = "2";
}

function compareModels() {
  const selectedA = models[Number(modelA.value)];
  const selectedB = models[Number(modelB.value)];

  if (!selectedA || !selectedB) {
    compareResult.textContent = "Please select two valid models.";
    return;
  }

  if (selectedA.name === selectedB.name) {
    compareResult.textContent = "Pick two different models for a meaningful comparison.";
    return;
  }

  compareResult.innerHTML = `
    <strong>${selectedA.name}</strong> vs <strong>${selectedB.name}</strong><br>
    Price: ${selectedA.price} vs ${selectedB.price}<br>
    Efficiency (Range/Mileage): ${selectedA.range} vs ${selectedB.range}<br>
    Type: ${selectedA.type} vs ${selectedB.type}<br>
    Fuel: ${selectedA.fuel} vs ${selectedB.fuel}
  `;
}

function setupMenu() {
  menuButton.addEventListener("click", () => {
    siteNav.classList.toggle("open");
  });
}

function setupNewsletterForm() {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailInput = document.getElementById("emailInput");
    const email = emailInput.value.trim();
    if (!email || !email.includes("@")) {
      formMessage.textContent = "Please enter a valid email.";
      return;
    }
    formMessage.textContent = `Thanks! ${email} has been subscribed.`;
    newsletterForm.reset();
  });
}

startTicker();
populateModelSelects();
compareButton.addEventListener("click", compareModels);
setupMenu();
setupNewsletterForm();
