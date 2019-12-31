function changeTab() {
  document.addEventListener(
    'click',
    function(e) {
      const contact = document.getElementById('contact-container');
      const menu = document.getElementById('menu-container');
      const home = document.querySelector('.textHome');
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

function addNavbar() {
  const navContainer = document.createElement('div');
  navContainer.className = 'tabscontainer';

  const nav = document.querySelector('.main-container');
  nav.appendChild(navContainer);

  const tabs = ['Home', 'Menu', 'Contact'];
  tabs.forEach(tab => {
    const button = document.createElement('button');
    button.addEventListener('click', changeTab);
    button.textContent = tab;
    button.classList.add(tab.toLowerCase());

    navContainer.appendChild(button);
  });
}

function init() {
  const contact = document.getElementById('contact-container');
  const menu = document.getElementById('menu-container');
  const home = document.querySelector('.textHome');
  contact.style.display = 'none';
  menu.style.display = 'none';
  home.style.display = 'inherit';
}

export { addNavbar, changeTab, init };
