const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const refList = document.querySelector('#ingredients');


const ingridienteItem = 
  ingredients.map(option => {  
    const item = document.createElement('li');
    item.classList.add("item");
    item.textContent = option;

    return item

})
console.log(ingridienteItem);
refList.append(...ingridienteItem);





// console.log(refList);



// item.textContent = ingredients[0];


// const link = document.createElement('a');
// link.classList.add = "link";
// link.textContent = "This id link text";
// link.href = './index.html'
// item.appendChild(link);

// console.log(item);
// console.log(link);

// refList.appendChild(item);
// refList.append(item);
// refList.insertBefore(item, null);



