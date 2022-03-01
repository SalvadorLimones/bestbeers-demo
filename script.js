const beers = [
  {
    title: "Mango Bay",
    sub: "Mad Scientist Beer",
    text: "Pale Ale - American",
  },
  {
    title: "Távoli Galaxis",
    sub: "Rothbeer Brewery",
    text: "IPA - American",
  },
  {
    title: "Flying Rabbit AIPA",
    sub: "MONYO Brewing Co.",
    text: "IPA - American",
  },
  {
    title: "Liquid Cocaine",
    sub: "Mad Scientist Beer",
    text: "IPA - Imperial",
  },
  {
    title: "Organic Chocolate Stout",
    sub: "Samuel Smith Old Brewery",
    text: "Stout - English",
  },
  {
    title: "Bracia",
    sub: "Thornbridge Brewery",
    text: "Strong Ale - English",
  },
  {
    title: "Oatmeal Stout",
    sub: "Samuel Smith Old Brewery",
    text: "Stout - Oatmeal",
  },
  {
    title: "Black Tokyo Horizon",
    sub: "BrewDog",
    text: "Stout - American Imperial",
  },
  {
    title: "Vintage Ale",
    sub: "Fuller's",
    text: "Old Ale",
  },
  {
    title: "All the Leaves are Brown",
    sub: "Tempest Brewing Company",
    text: "Brown Ale - American",
  },
];
let beerHTML = "";

beers.map((beer, i) => {
  beerHTML += `
    <div class="beercard">
      <div class="beer-number">${i + 1}</div>
      <div class="beer-title">${beer.title}</div>
      <div class="card-line"></div>
      <div class="beer-subtext">
      <div class="beer-sub">${beer.sub}</div>
      <div class="beer-text">${beer.text}</div>
      </div>
      <button class="beer-button">
        details
        <span class="material-icons"> arrow_forward </span>
      </button>
    </div>
  `;
});

function loadEvent() {
  console.log("page has been loaded");
  document
    .querySelector(".beercard-container")
    .insertAdjacentHTML("beforeend", beerHTML);
}

window.addEventListener("load", loadEvent);
