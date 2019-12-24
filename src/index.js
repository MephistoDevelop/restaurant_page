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
    const maintext2 = document.createElement("p");
    const maintext3 = document.createElement("p");
    const maintext4 = document.createElement("p");
    const maintext5 = document.createElement("p");
    const maintext6 = document.createElement("p");
    maintext2.textContent = "-variety of dishes";
    maintext3.textContent = "-Fresh eats";
    maintext4.textContent = "-Live Music";
    maintext6.textContent = "Open everydays from 10am";
    maintext6.id = "openText";
    maintext5.id = "speciality-text";
    maintext5.textContent =
      "Try the Speciality of the house Tostada de Ceviche";
    textHome.className = "textHome";
    mainText.textContent = "SeaFood Hernandez";
    textHome.appendChild(mainText);
    textHome.appendChild(maintext2);
    textHome.appendChild(maintext3);
    textHome.appendChild(maintext4);
    textHome.appendChild(maintext5);
    textHome.appendChild(maintext6);
    mainContainer.appendChild(textHome);
  } else if (this.className === "menu") {
    alert("Yo soy la tab Menu");
  } else if (this.className === "contact") {
    showContact();
  }
}

function showContact() {
  const mainContainer = document.querySelector(".main-container");
  const contactContainer = document.createElement("div");
  contactContainer.id = "contact-container";
  mainContainer.appendChild(contactContainer);

  const contactHeader = document.createElement("p");
  contactHeader.id = "contact-header";
  const contactzipCode = document.createElement("p");
  contactzipCode.id = "contact-zip";
  const contactEmail = document.createElement("p");
  contactEmail.id = "contact-email";
  const contactPhone = document.createElement("p");
  contactHeader.textContent = "Addres: Constituyentes Esquina con Allende";
  contactPhone.textContent = "Phone: +52 47 41 14 23 52";
  contactPhone.id = "contact-phone";
  contactzipCode.textContent = "ZipCode: 47420";
  contactEmail.textContent = "seafood@hernandez.com";
  contactEmail.id = "contact-email";
  contactContainer.appendChild(contactHeader);
  contactContainer.appendChild(contactPhone);
  contactContainer.appendChild(contactzipCode);
  contactContainer.appendChild(contactEmail);
}

document.body.appendChild(bodyComponent());
addNavbar();
