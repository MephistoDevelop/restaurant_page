//Page to
function bodyComponent() {
  const element = document.createElement("div");
  element.className = "main-container";
  element.style.display = "flex";
  element.style.color = "white";
  element.style.height = "100vh";
  element.style.display = "flex";
  element.style.margin = "10px";
  element.style.padding = "10px";
  element.style.backgroundColor = "red";
  element.style.flexDirection = "column";
  return element;
}

function addNavbar() {
  const navContainer = document.createElement("div");
  navContainer.className = "tabscontainer";
  navContainer.style.display = "flex";
  navContainer.style.width = "100%";
  navContainer.style.backgroundColor = "blue";

  const nav = document.querySelector(".main-container");
  nav.appendChild(navContainer);

  const tabs = ["Home", "Menu", "Contact"];
  tabs.forEach(tab => {
    const button = document.createElement("button");
    button.addEventListener("click", changeTab);
    button.textContent = tab;
    button.classList.add(tab.toLowerCase());
    button.style.width = "33.5%";
    button.style.height = "100%";
    button.style.border = "none";
    button.style.fontSize = "21px";
    button.style.padding = "10px 0";
    navContainer.appendChild(button);
  });
}

function changeTab() {
  alert("Haz cambiado y clickeado  la tab");
}

document.body.appendChild(bodyComponent());
addNavbar();
