const inputEl = document.querySelector<HTMLInputElement>('#name-input');
const outputEl = document.querySelector('#name-output');
inputEl?.addEventListener('input', textContentToRender);

function textContentToRender() {
  if (outputEl)
    outputEl.textContent =
      inputEl?.value.length === 0 ? 'Anonymous' : inputEl?.value ?? null;
}
