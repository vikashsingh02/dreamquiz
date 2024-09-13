document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('#image-slider-jd');
    const slides = slider.querySelectorAll('.slide-jd');
    let currentIndex = 0;
  
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }
  
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }
  
    showSlide(currentIndex);
    setInterval(nextSlide, 3000); 
  });
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        console.log("hello")
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
document.getElementById('dreamquiz-btn').addEventListener('click', function() {
document.getElementById('dreamquiz-categories').style.display = 'flex';
document.getElementById('competitive-categories').style.display = 'none';

// Update button styles
this.classList.add('active');
document.getElementById('competitive-btn').classList.remove('active');
});

document.getElementById('competitive-btn').addEventListener('click', function() {
document.getElementById('dreamquiz-categories').style.display = 'none';
document.getElementById('competitive-categories').style.display = 'flex';

// Update button styles
this.classList.add('active');
document.getElementById('dreamquiz-btn').classList.remove('active');
});