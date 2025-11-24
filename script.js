// Pour afficher les cards en HTML

const cardsList = document.getElementById("cards");
let cards = [];

const fetchCards = async () => {
  try {
    const response = await fetch("cards.json");
    const cards = await response.json();
    return cards;
  } catch (error) {
    console.error("Error:", error);
  }
};

function displayCards(cards) {
  cardsList.innerHTML = "";
  cards.forEach((card) => {
    const element = document.createElement("div");
    element.classList.add("articles");
    element.dataset.name = card.name;

    element.innerHTML = `
    <div class="front">
    <img src="${card.image}" alt="${card.title}">
    <div class ="details">
    <h3>${card.number}</h3>
    <h4>${card.title}</h4>
    <p>${card.description}</p>
    </div>
    </div>
    `;
    cardsList.appendChild(element);
  });
}

fetchCards().then((cards) => {
  if (cards) {
    element = cards;
    displayCards(element);
  }
});

// ----- Responsive sidebar ----- //

const menuBtn = document.getElementById("icon-menu");
const closeBtn = document.getElementById("close-btn");
const sideMenu = document.querySelector(".side-menu");
const overlay = document.querySelector(".overlay");

menuBtn.addEventListener("click", () => {
  sideMenu.classList.add("open");
  overlay.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sideMenu.classList.remove("open");
  overlay.style.display = "none";
});

overlay.addEventListener("click", () => {
  sideMenu.classList.remove("open");
  overlay.style.display = "none";
});
