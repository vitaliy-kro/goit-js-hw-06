const decrementBtn = document.querySelector("[data-action = 'decrement']");
const valueEl = document.querySelector('#value');
const incrementBtn = document.querySelector("[data-action = 'increment']");
decrementBtn?.addEventListener('click', () => {
  if (valueEl)
    valueEl.textContent = decrementByOne(
      convertToNumber(valueEl.textContent)
    ).toString();
});

function convertToNumber(string: string | null) {
  return Number(string);
}
function decrementByOne(value: number) {
  if (value > 0) {
    value -= 1;
  }
  return value;
}

incrementBtn?.addEventListener('click', () => {
  if (valueEl)
    valueEl.textContent = incrementByOne(
      convertToNumber(valueEl.textContent)
    ).toString();
});

function incrementByOne(value: number) {
  value += 1;
  return value;
}
