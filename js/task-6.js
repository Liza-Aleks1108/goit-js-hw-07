function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsEl = document.querySelector('#controls');
const inputEl = document.querySelector('input');
const createBtn = controlsEl.querySelector('[data-create]');
const destroyBtn = controlsEl.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

let width = 30;
let height = 30;
function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');

    box.classList.add('box');
    box.style.backgroundColor = getRandomHexColor();
    width += 10;
    height += 10;
    box.style.width = `${width}px`;
    box.style.height = `${height}px`;

    boxesEl.appendChild(box);
    inputEl.value = '';
  }
}

createBtn.addEventListener('click', event => {
  event.preventDefault();
  const amount = Number(inputEl.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }
});

function destroyBoxes() {
  boxesEl.innerHTML = '';
}

destroyBtn.addEventListener('click', destroyBoxes);
