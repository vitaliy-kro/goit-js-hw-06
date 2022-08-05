const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');
inputEl.addEventListener('input', event => {
  event.currentTarget.value.length === 0
    ? (outputEl.textContent = 'Anonymus')
    : (outputEl.textContent = event.currentTarget.value);
});
