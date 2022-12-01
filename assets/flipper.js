const changeButton = document.getElementById('flipper__change-btn-js');
let currentColor = document.getElementById('flipper__current-color-js');

function generateNewColor() {
  return `#${parseInt((Math.random() * 0xFFFFFF)).toString(16).padStart(6, '0')}`;
}

function getNewColor() {
  let color = generateNewColor();
  document.body.style.backgroundColor = color;
  currentColor.innerText = color;
}

changeButton.addEventListener('click', getNewColor);