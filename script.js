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
