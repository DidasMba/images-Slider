/* const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider li');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;

function showSlide(index) {
  if (index < 0) {
    currentIndex = slides.length - 1;
  } else if (index >= slides.length) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  for (let i = 0; i < slides.length; i++) {
    if (i === currentIndex) {
      slides[i].style.opacity = 1;
    } else {
      slides[i].style.opacity = 0;
    }
  }
}

prevButton.addEventListener('click', () => showSlide(currentIndex - 1));
nextButton.addEventListener('click', () => showSlide(currentIndex + 1));

// Initialize by showing the first slide
showSlide(currentIndex);



*/



function changeColor(newcolor){
  const elem = document.getElementById("para");
  elem.style.color = newcolor;

  }


const parentDOM = document.getElementById("parent-id");
//console.log(parentDOM);

const test1 = document.getElementById("test1");
//console.log(test1);

test1.style.color = 'red';