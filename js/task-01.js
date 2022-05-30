const allList = document.querySelectorAll('ul:not(#categories')
const categories = document.querySelectorAll('h2');

const categoriesList = [];
categories.forEach(element => categoriesList.push(element.textContent));
console.log(`Number of categories: ${categoriesList.length}`);

allList.forEach(element => {
    console.log(`Category: ${element.previousElementSibling.textContent}`),
        console.log(`Elements: ${element.children.length}`)
}) 