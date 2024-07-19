'use strict';

const header = document.querySelector('.header');
const home = document.querySelector('#home');
const arrowUp = document.querySelector('.arrow-up');

const headerHeight = header.getBoundingClientRect().height;
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', ()=> {
    scrollEvent();
});

function scrollEvent (){
    if (window.scrollY > headerHeight) {
        header.classList.add('header--dark');
        home.style.opacity = 0;

    } else {
        header.classList.remove('header--dark');
        home.style.opacity = 1 - (window.scrollY / headerHeight);
    }
   // console.log(`window.scroll:${window.scrollY}  homeHeight / 2: ${ homeHeight / 2} `)
    if (window.scrollY < homeHeight / 2){
        arrowUp.style.opacity = 0;
    }
    else {
        arrowUp.style.opacity = 1;
    }
}
const navBarMenu = document.querySelector('.header__menu');
const navBarToggle = document.querySelector('.header__toggle');

navBarToggle.addEventListener('click', ()=>{
    navBarMenu.classList.toggle('open');
});
// navBarMenu click 시 메뉴 닫아주기
navBarMenu.addEventListener('click', ()=>{
    navBarMenu.classList.remove('open');
});
