const bodyEl = document.querySelector('body');
const colorValueEl = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');
changeColorBtn.addEventListener('click', getRandomHexColor);

function getRandomHexColor() {
  const currentColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  colorValueEl.textContent = currentColor;
  bodyEl.style.backgroundColor = currentColor;
  return currentColor;
}
