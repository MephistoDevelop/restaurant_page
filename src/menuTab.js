function showMenu() {
  const mainContainer = document.querySelector(".main-container");
  const menuContainer = document.createElement("div");
  menuContainer.id = "menu-container";
  mainContainer.appendChild(menuContainer);
}

export { showMenu };
