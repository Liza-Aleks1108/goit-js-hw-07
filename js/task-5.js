function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector('body');
const btnEl = document.querySelector('button');
const colorEl = document.querySelector('.color');

btnEl.addEventListener('click', () => {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  colorEl.textContent = color;
});
