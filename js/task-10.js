const createButtonEl = document.querySelector('[data-create]');
const destroyButtonEl = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('input');
const divBoxesEl = document.querySelector('#boxes');

let currentValueEl = 0;
inputEl.addEventListener('input', event => {
  currentValueEl = event.currentTarget.value;
});

createButtonEl.addEventListener('click', createBoxes);
destroyButtonEl.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  amount = currentValueEl;
  const result = [];
  let elementSize = 20;

  for (let i = 1; i <= amount; i += 1) {
    divBoxesEl.innerHTML = '';
    elementSize += 10;
    result.push(
      `<div class = "boxes__item" style="width:${elementSize}px; height:${elementSize}px; background-color:${getRandomHexColor()} " ></div>`
    );
  }
  const markUp = result.join('');
  divBoxesEl.insertAdjacentHTML('beforeend', markUp);
}

function destroyBoxes() {
  divBoxesEl.innerHTML = '';
}
