function addNavbar() {
  var navContainer = document.createElement('div');
  navContainer.className = 'tabscontainer';

  var nav = document.querySelector('.main-container');
  nav.appendChild(navContainer);

  var tabs = ['Home', 'Menu', 'Contact'];
  tabs.forEach(tab => {
    var button = document.createElement('button');
    button.addEventListener('click', changeTab);
    button.textContent = tab;
    button.classList.add(tab.toLowerCase());

    navContainer.appendChild(button);
  });
}
function init() {
  var contact = document.getElementById('contact-container');
  var menu = document.getElementById('menu-container');
  var home = document.querySelector('.textHome');
  contact.style.display = 'none';
  menu.style.display = 'none';
  home.style.display = 'inherit';
}
function changeTab() {
  document.addEventListener(
    'click',
    function(e) {
      var contact = document.getElementById('contact-container');
      var menu = document.getElementById('menu-container');
      var home = document.querySelector('.textHome');
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
