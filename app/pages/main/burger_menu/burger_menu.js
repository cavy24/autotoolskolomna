function burgerMenu() {
let burger = document.getElementById('burger-button');
  let navBurger =  document.getElementById('nav-burger');
  burger.addEventListener('click', (event) => {
    event.preventDefault();
    navBurger.classList.toggle('open');
    burger.classList.toggle('open');
});
};
