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
  submitBtn.style.backgroundColor = 'rgb(143, 143, 144';
  if (agreementCheckbox.checked === true) {
    submitBtn.disabled = false;
    submitBtn.style.backgroundColor = 'rgb(80, 26, 124)';
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

const radioInputsFamily = document.getElementsByClassName('family');
const secondContainer = document.querySelector('#second-container');
const familyContainer = document.querySelector('#family-container');

function replaceInputsFamily() {
  const createParagraph = document.createElement('p');
  for (let i = 0; i < radioInputsFamily.length; i += 1) {
    if (radioInputsFamily[i].checked === true) {
      createParagraph.innerText = `Família: ${radioInputsFamily[i].value}`;
    }
  }
  secondContainer.removeChild(familyContainer);
  secondContainer.appendChild(createParagraph);
}

const contentCheckBoxInpusts = document.getElementsByClassName('subject');
const contentContainer = document.querySelector('#checkbox-content');

function supportReplaceInputsContent(text, value) {
  let tempString = '';
  if (text === 'Matérias: ') {
    tempString += value;
  } else {
    tempString += `, ${value}`;
  }
  return tempString;
}

function replaceInputsContent() {
  const createParagraph = document.createElement('p');
  createParagraph.setAttribute('id', 'paragraph-content');
  let text = 'Matérias: ';
  for (let i = 0; i < contentCheckBoxInpusts.length; i += 1) {
    if (contentCheckBoxInpusts[i].checked === true) {
      text += supportReplaceInputsContent(text, contentCheckBoxInpusts[i].value);
    }
    createParagraph.innerText = text;
  }
  secondContainer.removeChild(contentContainer);
  secondContainer.appendChild(createParagraph);
}

const rateRadioInputs = document.getElementsByClassName('rate');
const evatualionContainer = document.querySelector('#evaluation-container');

function replaceRate() {
  const createParagraph = document.createElement('p');
  for (let i = 0; i < rateRadioInputs.length; i += 1) {
    if (rateRadioInputs[i].checked === true) {
      createParagraph.innerText = `Avaliação: ${rateRadioInputs[i].value}`;
    }
  }
  console.log(evatualionContainer.firstElementChild);
  evatualionContainer.removeChild(evatualionContainer.firstElementChild);
  console.log(evatualionContainer.firstElementChild);
  evatualionContainer.removeChild(evatualionContainer.firstElementChild);
  evatualionContainer.appendChild(createParagraph);
}

const commentTextArea = document.querySelector('#textarea');
const textAreaContainer = document.querySelector('#textarea-container');

function replaceTextArea() {
  const createParagraph = document.createElement('p');
  createParagraph.innerText = `Observações: ${commentTextArea.value}`;
  textAreaContainer.removeChild(textAreaContainer.firstElementChild);
  textAreaContainer.removeChild(textAreaContainer.firstElementChild);
  textAreaContainer.removeChild(textAreaContainer.firstElementChild);
  textAreaContainer.appendChild(createParagraph);
}

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  replaceInputsNameWithText();
  replaceInputsEmailAndSelectWithText();
  replaceInputsFamily();
  replaceInputsContent();
  replaceRate();
  replaceTextArea();
});
