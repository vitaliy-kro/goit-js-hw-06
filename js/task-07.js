const sizeControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
sizeControlEl.addEventListener('input', event => {
  console.log(typeof event.currentTarget.value);
  textEl.style.fontSize = `${Number(event.currentTarget.value)}px`;
});
