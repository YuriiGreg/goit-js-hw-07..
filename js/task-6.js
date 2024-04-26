function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

function createBoxes(amount) {
  boxesContainer.innerHTML = '';
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    size += 10;
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

createButton.addEventListener('click', () => {
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  }
});

destroyButton.addEventListener('click', () => {
  destroyBoxes();
});

const createButtons = document.getElementById('#controls');

createButton.addEventListener('mouseenter', function() {
    this.style.backgroundColor = '#6C8CFF';
});

createButton.addEventListener('mouseleave', function() {
    this.style.backgroundColor = '';
});

const destroyButtons = document.getElementById('#controls');

destroyButton.addEventListener('mouseenter', function() {
    this.style.backgroundColor = '#FF7070';
});

destroyButton.addEventListener('mouseleave', function() {
    this.style.backgroundColor = '';
});