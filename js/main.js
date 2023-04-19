const active = document.querySelector(".header-nav__items");
const burger = document.querySelector(".header-nav__burger");
const nav = document.querySelector(".header-nav");

burger.addEventListener("click", function(event){
    nav.classList.toggle("active");
    burger.classList.toggle("active");
    active.classList.toggle("active");
});

