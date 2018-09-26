document.addEventListener('DOMContentLoaded', ready);
function ready() {
  console.log('DOM is ready!');
  document.createElement('header');
  document.createElement('nav');
  document.createElement('section');
  document.createElement('article');
  document.createElement('aside');
  document.createElement('footer');
  document.createElement('details');
  document.createElement('summary');
  burgerMenu();
  showSlides();
  goCatalog();
  checkForm();
 };
//= ../pages/main/burger_menu/burger_menu.js
//= ../pages/main/slider/slider.js
//= ../pages/main/button/button.js
//= ../pages/main/form/forms.js
