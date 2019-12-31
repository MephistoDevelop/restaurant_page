function addNavbar() {
  let navContainer = document.createElement('div');
  navContainer.className = 'tabscontainer';

  let nav = document.querySelector('.main-container');
  nav.appendChild(navContainer);

  let tabs = ['Home', 'Menu', 'Contact'];
  tabs.forEach(tab => {
    let button = document.createElement('button');
    button.addEventListener('click', changeTab);
    button.textContent = tab;
    button.classList.add(tab.toLowerCase());

    navContainer.appendChild(button);
  });
}
function init() {
  let contact = document.getElementById('contact-container');
  let menu = document.getElementById('menu-container');
  let home = document.querySelector('.textHome');
  contact.style.display = 'none';
  menu.style.display = 'none';
  home.style.display = 'inherit';
}
function changeTab() {
  document.addEventListener(
    'click',
    function(e) {
      let contact = document.getElementById('contact-container');
      let menu = document.getElementById('menu-container');
      let home = document.querySelector('.textHome');
      if (e.target.className === 'home') {
        contact.style.display = 'none';
        menu.style.display = 'none';
        home.style.display = 'inherit';
      } else if (e.target.className === 'menu') {
        home.style.display = 'none';
        contact.style.display = 'none';
        menu.style.display = 'inherit';
      } else if (e.target.className === 'contact') {
        home.style.display = 'none';
        contact.style.display = 'inherit';
        menu.style.display = 'none';
      }
    },
    false
  );
}
export { addNavbar, changeTab, init };
