let images = [{
  src: 'images/PNG/chairs.png',
  text: 'Rostov-on-Don, Admiral'
}, {
  src: 'images/PNG/image 2.png',
  text: 'Sochi Thieves'
}, {
  src: 'images/PNG/image 3.png',
  text: 'Rostov-on-Don Patriotic'
}];

function initSlider(options) {
if (!images || !images.length) return;

options = options || {
  dots: true,
  text: true
};

let sliderContainer = document.querySelector(".slider");
let sliderArrows = document.querySelector(".slide_construction");
let sliderDots = document.querySelector(".dots_container");
let sliderText = document.querySelector(".city_list");

initImages();
initArrows();

if (options.dots){
  initDots();
}
if (options.text){
  initText();
}

function initImages() {
  images.forEach((image, index) => {
    let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}"
     style="background-image: url('${images[index].src}');" data-index="${index}"></div>`;
     sliderContainer.innerHTML += imageDiv;
  });
 }

 function initArrows() {
  sliderArrows.querySelectorAll(".arrow").forEach(arrow => {
    arrow.addEventListener("click", function(){
      let curNumber = +sliderContainer.querySelector(".active").dataset.index;
      let nextNumber;
      if (arrow.classList.contains("left")){
        nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
      } else {
        nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
      }
      moveSlider(nextNumber);
    });
  });
 }

function initDots() {
  images.forEach((image, index) => {
    let dot = `<div class ="img-groups n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
    sliderDots.innerHTML += dot;
  });
  sliderDots.querySelectorAll(".img-groups").forEach(dot => {
    dot.addEventListener("click", function() {
     moveSlider(this.dataset.index);
    })
  })
}



 function moveSlider(num) {
  sliderContainer.querySelector(".active").classList.remove("active");
  sliderContainer.querySelector(".n" + num).classList.add("active");
  
  if (options.dots) {
    sliderDots.querySelector(".active").classList.remove("active");
    sliderDots.querySelector(".n" + num).classList.add("active");
  }
  if (options.text) {
    sliderText.querySelector(".active").classList.remove("active");
    sliderText.querySelector(".n" + num).classList.add("active");
  }
 }


 function initText() {
  images.forEach((image, index) => {
    let text = `<div class ="city_list-text n${index} ${index === 0? "active" : ""}" data-index="${index}">${image.text}</div>`;
    sliderText.innerHTML += text;
  });
}


  sliderText.querySelectorAll(".city_list-text").forEach(text => {
    text.addEventListener("click", function() {
    moveSlider(this.dataset.index);
    })
  })
}




let sliderOptions = {
  dots: true,
  text: true
};

document.addEventListener("DOMContentLoaded", function() {
  initSlider(sliderOptions);
});