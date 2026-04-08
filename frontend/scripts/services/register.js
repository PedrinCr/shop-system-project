import registerFetch from './fetch-functions.js';

const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const registerButton = document.getElementById('registerButton');

registerButton.addEventListener('click', (event) => {
  event.preventDefault();

  const email = emailInput.value;
  const phone = phoneInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  const response = registerFetch(email, phone, password);
  return response.then((data) => console.log(data));
});
