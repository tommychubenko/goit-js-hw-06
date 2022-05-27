const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryList = document.querySelector('.gallery');

const markUpping = option => {
  return `<li class="item-3"><img src="${option.url}" alt="${option.alt}" class="image"></li>`};

const makeMarkUp = images.map(markUpping).join('');
galleryList.insertAdjacentHTML('beforeend', makeMarkUp)





// Метод додавання через .append та map

// const imageRef = images.map(image => {
//   const galleryItem = document.createElement('li');
//   const galleryImage = document.createElement('img');
//   galleryImage.src = image.url;
//   galleryImage.alt = image.alt;
//   galleryItem.appendChild(galleryImage);
  

//   return galleryItem
// });

// console.log(...imageRef)

// galleryList.append(...imageRef);




// galleryList.insertAdjacentHTML("afterbegin")