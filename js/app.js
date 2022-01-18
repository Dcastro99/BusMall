'use strict';
let picArray = [];
let currentImages = [];
let counter = 0;
let counterMaxValue = 15;

const myContainer = document.querySelector('section');
const myButton = document.getElementById('button');

let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');
let image3 = document.querySelector('section img:nth-child(3)');

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

  

  while (potentialIndexesToAdd.length < 3) {
    let picIndex = selectRandomPicIndex();
    if (!potentialIndexesToAdd.includes(picIndex)) {
      potentialIndexesToAdd.push(picIndex);
    }
  }

  for (let i = 0; i < potentialIndexesToAdd.length; i++) {
   
    let p = potentialIndexesToAdd[i];
    currentImages[i].src = picArray[p].src;
    currentImages[i].alt = picArray[p].name;
    picArray[p].views++;
  }
}

function handleClick(event) {
  if (event.target === myContainer) {
    alert('Please click on an image');
  }
  counter++;
  
  let picClicked = event.target.alt;
 
  for (let i = 0; i < picArray.length; i++) {
    if (picClicked === picArray[i].name) {
      picArray[i].likes++;
      break;
    }
  }
  if (counter === counterMaxValue) {
 
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
  let ul = document.getElementById('results');

  if (ul) {
    ul.remove();
  }
  ul = document.createElement('ul');
  ul.id = 'results'

  for (let i = 0; i < picArray.length; i++) {
    let message = `${picArray[i].name} had ${picArray[i].views} views amd was clicked on ${picArray[i].likes} times`;
    let li = document.createElement('li');
    li. textContent = message;
    ul.appendChild(li);
  }
  document.getElementById('sidebar').appendChild(ul);
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
