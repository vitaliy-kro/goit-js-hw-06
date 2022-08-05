let counterValue = 0;
const decrementBtn = document.querySelector("[data-action = 'decrement']");
const valueEl = document.querySelector('#value');
const incrementBtn = document.querySelector("[data-action = 'increment']");
decrementBtn.addEventListener('click', () => {
  if (counterValue > 0) {
    counterValue -= 1;
    valueEl.textContent = counterValue;
  }
});
incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});
