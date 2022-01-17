'use strict';
let picArray = [];
let currentImages = [];
let counter = 0;
let counterMaxValue = 3;

const myContainer = document.querySelector('section');
const myButton = document.getElementById('button');


let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');
let image3 = document.querySelector('section img:nth-child(3)');
// at this point images are only HTML tags / selectors.
currentImages.push(image1, image2, image3);

function BusPic(name, fileExtension = 'jpg') {
  this.likes = 0;
  this.views = 0;
  this.name = name;
  this.src = `images/${name}.${fileExtension}`;
  picArray.push(this);
}
function selectRandomPicIndex() {
  return Math.floor(Math.random() * picArray.length);
}
function renderPics() {
  let potentialIndexesToAdd = [];

  let picIndex = selectRandomPicIndex();

  while (potentialIndexesToAdd.length < 3) {
    if (!potentialIndexesToAdd.includes(picIndex)) {
      potentialIndexesToAdd.push(picIndex);
    } else {
      picIndex = selectRandomPicIndex();
    }
  }

  for (let i = 0; i < potentialIndexesToAdd.length; i++) {
    // p = 15, i = 0;
    // we are setting the current image at index 0's src to be the picArray images at index 15's src
    // we are accessing the picArrays data at the randomly generated numbers' 
    // index to set that to the currentimages array index of 0-2, so the current images data fully set.
    let p = potentialIndexesToAdd[i];
    console.log('p is : ', p);
    console.log('currentImages[i] is : ', currentImages[i]);
    console.log('picArray[p] : is ', picArray[p]);

    currentImages[i].src = picArray[p].src;
    currentImages[i].alt = picArray[p].name;
    picArray[p].views++;

    console.log('then after setting infromation :');
    console.log('currentImages[i].src is : ', currentImages[i].src);
    console.log('currentImages[i].alt is : ', currentImages[i].alt);

  }
}

function handleClick(event) {
  if (event.target === myContainer) {
    alert('Please click on an image');
  }
  counter++;
  // find out what image was clicked on
  let picClicked = event.target.alt;
  // increment likes on that goat
  // Google better way?
  for (let i = 0; i < picArray.length; i++) {
    if (picClicked === picArray[i].name) {
      picArray[i].likes++;
      break;
    }
  }
  // render new goats on the page
  if (counter === counterMaxValue) {
    // stop the game
    myContainer.removeEventListener('click', handleClick);
    myButton.className = 'clicks-allowed';
    myButton.addEventListener('click', handleButtonClick);
  }
  renderPics();
}

function handleButtonClick() {
  if (counter === counterMaxValue) {
    renderResults();
  }

}

function renderResults() {
  let ul = document.querySelector('ul');
  for (let i = 0; i < picArray.length; i++) {
    let message = `${picArray[i].name} had ${picArray[i].views} views amd was clicked on ${picArray[i].likes} times`;
    let li = document.createElement('li');
    li. textContent = message;
    ul.appendChild(li);
  }

}

// code that runs on page load:

new BusPic('bag');
new BusPic('banana');
new BusPic('bathroom');
new BusPic('boots');
new BusPic('breakfast');
new BusPic('bubblegum');
new BusPic('chair');
new BusPic('cthulhu');
new BusPic('dog-duck');
new BusPic('dragon');
new BusPic('pen');
new BusPic('pet-sweep');
new BusPic('scissors');
new BusPic('shark');
new BusPic('sweep','png');
new BusPic('tauntaun');
new BusPic('unicorn');
new BusPic('water-can');
new BusPic('wine-glass');



renderPics();

myContainer.addEventListener('click', handleClick);
