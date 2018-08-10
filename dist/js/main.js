'use strict';

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
};
'use strict';

var burger = document.getElementById('#burger-button');
var navBurger = document.getElementById('#nav-burger');
burger.addEventListener('click', function (event) {
  event.preventDefault();
  navBurger.classList.toggle('open');
  burger.classList.toggle('open');
});