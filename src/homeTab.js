function showHome() {
  var mainContainer = document.querySelector('.main-container');
  var textHome = document.createElement('div');
  var mainText = document.createElement('h1');
  var maintext2 = document.createElement('p');
  var maintext3 = document.createElement('p');
  var maintext4 = document.createElement('p');
  var maintext5 = document.createElement('p');
  var maintext6 = document.createElement('p');
  maintext2.textContent = '-variety of dishes';
  maintext3.textContent = '-Fresh eats';
  maintext4.textContent = '-Live Music';
  maintext6.textContent = 'Open everydays from 10 am with a familar ambient';
  maintext6.id = 'openText';
  maintext5.id = 'speciality-text';
  maintext5.textContent = 'Try the Speciality of the house Tostada de Ceviche';
  textHome.className = 'textHome';
  mainText.textContent = 'SeaFood Hernandez Restaurant';
  textHome.appendChild(mainText);
  textHome.appendChild(maintext2);
  textHome.appendChild(maintext3);
  textHome.appendChild(maintext4);
  textHome.appendChild(maintext5);
  textHome.appendChild(maintext6);
  mainContainer.appendChild(textHome);
  document.body.style.height = '100px';
}

export { showHome };
