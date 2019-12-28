import { addNavbar, init } from "./navbar";
import { showContact } from "./contactTab";
import { showHome } from "./homeTab";
import { showMenu } from "./menuTab";

function bodyComponent() {
  const element = document.createElement("div");
  element.className = "main-container";
  return element;
}

(function() {
  document.body.appendChild(bodyComponent());
  addNavbar();
  showHome();
  showContact();
  showMenu();
  init();
})();
