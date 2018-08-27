function showSlides() {
let arrowRight = document.getElementById('arrow_right');
let arrowLeft = document.getElementById('arrow_left');
let slides = document.querySelectorAll('.main_description_examples_slider img');
const ACTIVE_CLASS = 'active';
const ACTIVE_CLASS_SELECTOR = '.' + ACTIVE_CLASS;
let slidesNotActive = slides.filter(slide => slide.className !== ACTIVE_CLASS_SELECTOR && slide);
slidesNotActive.forEach(slide => slide.classList.add('hide'));
arrowRight.addEventListener('click', function() {
  });
}