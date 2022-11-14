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
