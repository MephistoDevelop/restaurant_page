function showContact() {
  let mainContainer = document.querySelector('.main-container');
  let contactContainer = document.createElement('div');
  contactContainer.id = 'contact-container';
  mainContainer.appendChild(contactContainer);

  let contactHeader = document.createElement('p');
  contactHeader.id = 'contact-header';
  let contactzipCode = document.createElement('p');
  contactzipCode.id = 'contact-zip';
  let contactEmail = document.createElement('p');
  contactEmail.id = 'contact-email';
  let contactPhone = document.createElement('p');
  contactHeader.textContent = 'Direction: Constituyentes Esquina con Allende';
  contactPhone.textContent = 'Phone: +52 47 41 14 23 52';
  contactPhone.id = 'contact-phone';
  contactzipCode.textContent = 'ZipCode: 47420';
  contactEmail.textContent = 'seafood@hernandez.com';
  contactEmail.id = 'contact-email';
  contactContainer.appendChild(contactHeader);
  contactContainer.appendChild(contactPhone);
  contactContainer.appendChild(contactzipCode);
  contactContainer.appendChild(contactEmail);
}

export { showContact };
