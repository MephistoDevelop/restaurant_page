function showMenu() {
  const mainContainer = document.querySelector(".main-container");
  const menuContainer = document.createElement("div");
  const gridimages = document.createElement("div");
  const gridimages2 = document.createElement("div");
  const gridimages3 = document.createElement("div");
  const cardContainer = document.createElement("div");
  const cardContainer2 = document.createElement("div");
  const cardContainer3 = document.createElement("div");
  const cardContainer4 = document.createElement("div");
  const cardContainer5 = document.createElement("div");
  const cardContainer6 = document.createElement("div");
  const cardContainer7 = document.createElement("div");
  const cardContainer8 = document.createElement("div");
  const cardContainer9 = document.createElement("div");

  menuContainer.id = "menu-container";
  gridimages.className = "gridImages-container";
  gridimages2.className = "gridImages-container";
  gridimages3.className = "gridImages-container";
  cardContainer.className = "card-image-container";
  cardContainer.id = "img-cocktail-shrimp";
  cardContainer2.className = "card-image-container";
  cardContainer2.id = "img-cocktail-octopus";
  cardContainer3.className = "card-image-container";
  cardContainer3.id = "img-ostions";
  cardContainer4.className = "card-image-container";
  cardContainer4.id = "tostada-ceviche";
  cardContainer5.className = "card-image-container";
  cardContainer5.id = "tostada-pulpo";
  cardContainer6.className = "card-image-container";
  cardContainer6.id = "tostada-camaron";
  cardContainer7.className = "card-image-container";
  cardContainer7.id = "fried-fish2";
  cardContainer8.className = "card-image-container";
  cardContainer8.id = "fried-fish";
  cardContainer9.className = "card-image-container";
  cardContainer9.id = "shrimp-soup";
  mainContainer.appendChild(menuContainer);
  menuContainer.appendChild(gridimages);
  menuContainer.appendChild(gridimages2);
  menuContainer.appendChild(gridimages3);
  gridimages.appendChild(cardContainer);
  gridimages.appendChild(cardContainer2);
  gridimages.appendChild(cardContainer3);
  gridimages2.appendChild(cardContainer4);
  gridimages2.appendChild(cardContainer5);
  gridimages2.appendChild(cardContainer6);
  gridimages3.appendChild(cardContainer7);
  gridimages3.appendChild(cardContainer8);
  gridimages3.appendChild(cardContainer9);
}

export { showMenu };