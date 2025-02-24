const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.arrow_left');
const nextButton = document.querySelector('.arrow_right');
const cityButton = document.querySelectorAll('.city_list-text');
const radioButton = document.querySelectorAll('.img-groups');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

cityButton.forEach((button, index) => {
  button.addEventListener('click', (event) => {
      event.preventDefault(); 
      slideIndex = index; 
      updateSlider(); 
  });
});
radioButton.forEach((button, index) => {
  button.addEventListener('click', (event) => {
      event.preventDefault(); 
      slideIndex = index; 
      updateSlider(); 
  });
});

function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider();