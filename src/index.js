//Page to
let flag = 0;
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
  if (this.className === "home" && flag === 0) {
    flag++;
    const mainContainer = document.querySelector(".main-container");
    const textHome = document.createElement("div");
    const mainText = document.createElement("h1");
    textHome.className = "textHome";
    mainText.textContent = "SeaFood Hernandez";
    textHome.appendChild(mainText);
    mainContainer.appendChild(textHome);
  } else if (this.className === "menu") {
    alert("Yo soy la tab Menu");
  } else if (this.className === "contact") {
    alert("Yo soy la tab contact");
  }
}

document.body.appendChild(bodyComponent());
addNavbar();
