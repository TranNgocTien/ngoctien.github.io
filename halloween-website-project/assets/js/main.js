/*=============== SHOW MENU ===============*/

const navMenu=document.getElementById('nav-menu');
const navToggle=document.getElementById('nav-toggle');
const navClose=document.getElementById('nav-close');
/*=============== MENU SHOW  ===============*/
// Validate if constant exists
 if(navToggle)
 {
     navToggle.addEventListener('click',()=>{
         navMenu.classList.add('show-menu')
     })
 }
 /*=============== MENU HIDDEN  ===============*/
 if(navClose){
     navClose.addEventListener('click',()=>{
         navMenu.classList.remove('show-menu')
     })
 }
/*=============== REMOVE MENU MOBILE ===============*/
const navLink=document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu=document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n=>n.addEventListener('click',linkAction))

/*=============== HOME SWIPER ===============*/
var homeSwiper = new Swiper(".home-swiper", {
    spaceBetween:30,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable:true
    },
  });

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header=document.getElementById('header');
    if(this.scrollY>=50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll',scrollHeader);


/*=============== NEW SWIPER ===============*/
let newSwiper=new Swiper(".new-swiper",{
    centeredSlides:true,
    spaceBetween:16,
    slidesPerView:'auto',
    loop:true,   
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections=document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY=window.pageYOffset;

    sections.forEach(current=>{
        const sectionHeight=current.offsetHeight;
        const sectionTop=current.offsetTop-50;
        sectionId=current.getAttribute('id');
        if(scrollY > sectionTop && scrollY<=sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*='+sectionId+']').classList.add('active-link');
        }else{
            document.querySelector('.nav__menu a[href*='+sectionId+']').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll',scrollActive);

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp=document.getElementById('scroll-up');
    if(this.scrollY>=460) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll',scrollUp);
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr=ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
})

sr.reveal('.home-swiper, .new-swiper,.newsletter__container');
sr.reveal('.category__data,.trick__content,.footer__content',{interval:100});
sr.reveal('.about-data, .discount__img',{origin:'left'});
sr.reveal('.about__img,.discount__data',{origin:'right'});