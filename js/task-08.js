const loginFormEl = document.querySelector('.login-form');
const labelInputEl = document.querySelectorAll('label > input');
const userInformation = {};

loginFormEl.addEventListener('submit', event => {
  event.preventDefault();
  labelInputEl.forEach(({ name, value }) => {
    value.length === 0
      ? alert('Заповніть всі поля!')
      : (userInformation[name] = value);
  });
  console.log(userInformation);
  loginFormEl.reset();
});
