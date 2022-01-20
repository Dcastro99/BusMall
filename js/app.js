'use strict';

let picArray = [];
let counter = 0;
let counterMaxValue = 25;
let indexArray =[];
const myContainer = document.querySelector('section');
const myButton = document.getElementById('button');

let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');
let image3 = document.querySelector('section img:nth-child(3)');


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
 

  while (indexArray.length < 6) {
    let randomNumber = selectRandomPicIndex();
    if (!indexArray.includes(randomNumber)) {
      indexArray.push(randomNumber);
    }
  
  }
  
  let pic1 = indexArray.shift();
  let pic2 = indexArray.shift();
  let pic3 = indexArray.shift();

  image1.src = picArray[pic1].src;
  image1.alt = picArray[pic1].name;
  image2.src = picArray[pic2].src;
  image2.alt = picArray[pic2].name;
  image3.src = picArray[pic3].src;
  image3.alt = picArray[pic3].name;
  picArray[pic1].views++;
  picArray[pic2].views++;
  picArray[pic3].views++;

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
    myCanvas.className = 'clicks-allowed';
    renderChart();
  }
  else {
    renderPics();
  }
}
// https://www.chartjs.org/docs/latest/
// https://www.chartjs.org/docs/latest/samples/information.html
function renderChart() {
  let picNames = [];
  let picLikes = [];
  let picViews = [];
  for (let i = 0; i < picArray.length; i++) {
   
    picNames.push(picArray[i].name);
    picLikes.push(picArray[i].likes);
    picViews.push(picArray[i].views);
  }
  console.log(picNames);
  const data = {
    labels: picNames,
    datasets: [{
      label: '# of Views',
      data: picViews,
      backgroundColor: [
        'rgba(64, 215, 226, 0.4)'
      ],
      borderColor: [
        'rgb(64, 215, 226)',
      ],
      borderWidth: 2
    },
    {
      label: '# of like/clicks',
      data: picLikes,
      backgroundColor: [
        'rgba(255, 216, 169, 0.4)',
      ],
      borderColor: [
        'rgb(255, 216, 169)',
      ],
      borderWidth: 2
    }]
  };
  Chart.defaults.font.size = 16;
  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        
        y: {
          beginAtZero: true
        }
        
      }
    },
    
  };
  const chart = document.getElementById('myCanvas');
  const myChart = new Chart(chart, config);
  
}

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
