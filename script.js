const loginInputEmail = document.getElementById('login-input-email');
const loginInputPass = document.getElementById('login-input-pass');
const loginButton = document.getElementById('login-button');

loginButton.addEventListener('click', (event) => {
  event.preventDefault();
  if (loginInputEmail.value === 'tryber@teste.com' && loginInputPass.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const submitBtn = document.querySelector('#submit-btn');
const agreementCheckbox = document.querySelector('#agreement');

agreementCheckbox.addEventListener('change', () => {
  submitBtn.disabled = true;
  if (agreementCheckbox.checked === true) {
    submitBtn.disabled = false;
  }
});

const textarea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');

textarea.addEventListener('input', () => {
  const num = textarea.value.length;
  counter.innerText = 500 - num;
});

const sectionNameAndLastname = document.querySelector('.form-input-name-container');
const firstContainer = document.querySelector('#first-container');
const inputName = document.querySelector('#input-name');
const inputLastName = document.querySelector('#input-lastname');

function replaceInputsNameWithText() {
  const createParagraph = document.createElement('p');
  createParagraph.innerText = `Nome: ${inputName.value} ${inputLastName.value}`;
  firstContainer.removeChild(sectionNameAndLastname);
  firstContainer.appendChild(createParagraph);
}

const sectionHouse = document.querySelector('.form-input-house-container');
const inputEmail = document.querySelector('#input-email');
const selectHouse = document.querySelector('#house');

function replaceInputsEmailAndSelectWithText() {
  const createParagraph = document.createElement('p');
  const createParagraphTwo = document.createElement('p');
  createParagraph.innerText = `Email: ${inputEmail.value}`;
  createParagraphTwo.innerText = `Casa: ${selectHouse.value}`;
  firstContainer.removeChild(sectionHouse);
  firstContainer.appendChild(createParagraph);
  firstContainer.appendChild(createParagraphTwo);
}

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  replaceInputsNameWithText();
  replaceInputsEmailAndSelectWithText();
});
