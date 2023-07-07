const sizeControlEl =
  document.querySelector<HTMLInputElement>('#font-size-control');
const textEl = document.querySelector<HTMLElement>('#text');
sizeControlEl?.addEventListener('input', event => {
  if (event.target instanceof HTMLInputElement)
    setTextElFontSize(event.target.value);
});

function setTextElFontSize(value: string) {
  if (textEl) textEl.style.fontSize = `${value}px`;
}
