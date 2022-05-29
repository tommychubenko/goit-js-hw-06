function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const input = document.querySelector('[type=number]');
const createBtn = document.querySelector('[data-create]')
const destroyBtn = document.querySelector('[data-destroy]')
const mainDiv = document.querySelector('#boxes');

const warehouseOdDivs = [];



function createBoxes(event) {  
  for (let i = 0; i < input.value; i += 1){
    let randomColor = getRandomHexColor();
    const randomDiv = document.createElement("div");    
    randomDiv.style.backgroundColor = randomColor;
    randomDiv.style.height = `${i * 10 + 30}px`;
    randomDiv.style.width = `${i * 10 + 30}px`;
    warehouseOdDivs.push(randomDiv);    
  };  

  mainDiv.append(...warehouseOdDivs);
  warehouseOdDivs.length = 0;
};
 
function destroyBoxes(event) {
   mainDiv.innerHTML = "";  
  }



createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes)
