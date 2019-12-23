//Page to
function bodyComponent() {
  const element = document.createElement("div");
  element.className = "main-container";
  element.innerHTML = "Hello, i'm MephistoDevelop again !!";
  element.style.display = "flex";
  element.style.color = "white";
  element.style.height = "100vh";
  element.style.display = "flex";
  element.style.justifyContent = "center";
  element.style.margin = "10px";
  element.style.padding = "10px";
  element.style.backgroundColor = "red";
  element.style.flexDirection = "column";
  return element;
}

function addNavbar() {
  const navContainer = document.createElement("div");
  const nav = document.querySelector(".main-container");
  nav.appendChild(navContainer);
  const tabs = ["Home", "Menu", "Contact"];
  tabs.forEach(tab => {
    const button = document.createElement("button");
    button.addEventListener("click", changeTab);
    button.textContent = tab;
    button.classList.add(tab.toLowerCase());
    const tabsContainer = document.createElement("div");
    nav.appendChild(button);
  });
}

function changeTab() {
  alert("Haz cambiado y clickeado  la tab");
}

document.body.appendChild(bodyComponent());
addNavbar();
