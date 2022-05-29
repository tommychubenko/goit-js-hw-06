const colorInfo = document.querySelector('.widget span');


const changeColorBtn = document.querySelector('.widget button');

const body = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function changeColor() {
  const randomColor = getRandomHexColor()
  body.style.backgroundColor = randomColor;
  colorInfo.textContent = randomColor;
  console.log(`Генерим новий колір... ${randomColor}`)
 }

changeColorBtn.addEventListener('click', changeColor)




