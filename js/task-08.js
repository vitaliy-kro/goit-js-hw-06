const loginFormEl = document.querySelector('.login-form');
const labelInputEl = document.querySelectorAll('label > input');

loginFormEl.addEventListener('submit', event => {
  event.preventDefault();
  const userInformation = {};
  if (
    labelInputEl[0].value.length === 0 ||
    labelInputEl[1].value.length === 0
  ) {
    return alert('Заповніть всі поля!');
  }
  userInformation[labelInputEl[0].name] = labelInputEl[0].value;
  userInformation[labelInputEl[1].name] = labelInputEl[1].value;

  console.log(userInformation);
  loginFormEl.reset();
});
