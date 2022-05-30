// const list = document.querySelector('#categories');
// const numberOfCategories = list.children.length;

const list = document.querySelectorAll('li');
const allList = document.querySelectorAll('ul')
const categories = document.querySelectorAll('h2');

const categoriesList = [];
categories.forEach(element => categoriesList.push(element.textContent));
console.log(`Number of categories: ${categoriesList.length}`);


const listAnimals = [];
allList.forEach(element => listAnimals.push(element.children));
listAnimals.shift();


console.log(`Category: ${categoriesList[0]}`);
console.log(`Elements: ${listAnimals[0].length}`);
console.log(`Category: ${categoriesList[1]}`);
console.log(`Elements: ${listAnimals[1].length}`);
console.log(`Category: ${categoriesList[2]}`);
console.log(`Elements: ${listAnimals[2].length}`);