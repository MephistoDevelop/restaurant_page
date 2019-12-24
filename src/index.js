//Page to
function bodyComponent() {
  const element = document.createElement("div");
  element.className = "main-container";
  return element;
}

function addNavbar() {
  const navContainer = document.createElement("div");
  navContainer.className = "tabscontainer";

  const nav = document.querySelector(".main-container");
  nav.appendChild(navContainer);

  const tabs = ["Home", "Menu", "Contact"];
  tabs.forEach(tab => {
    const button = document.createElement("button");
    button.addEventListener("click", changeTab);
    button.textContent = tab;
    button.classList.add(tab.toLowerCase());

    navContainer.appendChild(button);
  });
}

function changeTab() {
  alert("Haz cambiado y clickeado  la tab");
}

document.body.appendChild(bodyComponent());
addNavbar();
