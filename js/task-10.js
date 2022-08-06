const controlsFormEl = document.querySelector('#controls');
const createButtonEl = document.querySelector('[data-create]');
const destroyButtonEl = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('input');
const divBoxesEl = document.querySelector('#boxes');

let currentValueEl = 0;
inputEl.addEventListener('input', event => {
  currentValueEl = event.currentTarget.value;
  console.log;
});
createButtonEl.addEventListener('click', createBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  const result = [];
  let elementSize = 20;

  for (let i = 1; i <= amount; i += 1) {
    elementSize += 10;
    result.push(
      `<div class = "boxes__item" style="width:${elementSize}px; height:${elementSize}px; background-color:${getRandomHexColor()} " ></div>`
    );
  }
  const markUp = result.join('');
  divBoxesEl.insertAdjacentHTML('beforeend', markUp);
}
