const list = document.querySelector('#categories');
const numberOfCategories = list.children.length;
 

const categoryNames = [list.children[0].children[0].textContent, list.children[1].children[0].textContent, list.children[2].children[0].textContent];


console.log(`Number of categories: ${numberOfCategories}`);
console.log(`Category: ${categoryNames[0]}`);
console.log(`Elements: ${list.children[0].children[1].children.length}`);
console.log(`Category: ${categoryNames[1]}`);
console.log(`Elements: ${list.children[1].children[1].children.length}`);
console.log(`Category: ${categoryNames[2]}`);
console.log(`Elements: ${list.children[2].children[1].children.length}`);
