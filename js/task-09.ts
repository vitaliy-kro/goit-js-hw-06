const bodyEl = document.querySelector('body');
const colorValueEl = document.querySelector('.color');
const changeColorBtn =
  document.querySelector<HTMLButtonElement>('.change-color');
changeColorBtn?.addEventListener('click', getRandomHexColor);

function getRandomHexColor() {
  const currentColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  setHexColorForBodyAndSpan(currentColor);
}

function setHexColorForBodyAndSpan(color: string) {
  if (colorValueEl) colorValueEl.textContent = color;
  if (bodyEl) bodyEl.style.backgroundColor = color;
}
