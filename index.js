const DATA_KEY = "cardData";
let cardData = {};

function drawCard() {
  const app = document.querySelector("#app");
  const containerID = "business-card";
  const container = document.querySelector(`#${containerID}`)  || document.createElement("div");
  
  if (container.children.length) {
    container.innerHTML = null;
  }

  container.id = containerID;

  const contacts = document.createElement("p");
  const name = document.createElement("p");
  const email = document.createElement("span");
  const phone = document.createElement("span");
  const address = document.createElement("p");
  const service = document.createElement("p");

  name.textContent = cardData.name;
  email.textContent = cardData.email;
  phone.textContent = cardData.phone;
  address.textContent = cardData.address;
  service.textContent = cardData.service;

  contacts.append(email, " ", phone);
  container.append(name, contacts, address, service);
  app.append(container);
}

  window.addEventListener("DOMContentLoaded", () => {
  const data = JSON.parse(window.localStorage.getItem(DATA_KEY));

  if(data) {
    cardData = data;

    document.querySelector("#app #name").value = data.name;
    document.querySelector("#app #email").value = data.email;
    document.querySelector("#app #phone").value = data.phone;
    document.querySelector("#app #address").value = data.address;
    document.querySelector("#app #service").value = data.service;

    drawCard();
  }
});



document.querySelector("#app #data-form").addEventListener("submit", (event) => {
event.preventDefault();
  
  cardData.name = document.querySelector("#app #name").value;
  cardData.email = document.querySelector("#app #email").value;
  cardData.phone = document.querySelector("#app #phone").value;
  cardData.address = document.querySelector("#app #address").value;
  cardData.service = document.querySelector("#app #service").value;

  window.localStorage.setItem(DATA_KEY, JSON.stringify(cardData));

  drawCard();
});