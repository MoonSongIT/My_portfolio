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
       // 헤더 스타일 변경
       header.classList.toggle('header--dark', window.scrollY > homeHeight);

       // home 섹션의 opacity 부드럽게 조절
       const opacity = Math.max(0, 1 - (window.scrollY / (homeHeight * 1.5)));
       home.style.opacity = opacity;
   
       // arrow-up 버튼 표시 여부
       arrowUp.style.opacity = window.scrollY > homeHeight * 0.5 ? 1 : 0;
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
