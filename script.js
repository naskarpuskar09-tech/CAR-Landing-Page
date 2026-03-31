// ====== SHOW MENU ======
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

// menu show
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.toggle('show-menu')
    })
}

// menu hidden
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

// ====== REMOVE MENU MOBILE ======
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// ====== SWIPE CAR ======
const swiperHome = new Swiper('.home__swiper', {
    speed: 1200,
    effect: 'fade',
    loop: true,
    grabCursor: true,
    slidesPerView: 1,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    fadeEffect: {
        crossFade: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
        renderBullet: (index, className) => {
            return '<span class="' + className + '">' + String(index + 1).padStart(2,'0') + "</span>"
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    keyboard: {
        enabled: true,
    },
})

// ====== GSAP ANIMATION ======


// ====== ADD BLUR HEADER ======
const blurHeader = () =>{
    const header = document.getElementById('header')
    if(window.scrollY >= 50){
        header.classList.add('blur-header')
    }else{
        header.classList.remove('blur-header')
    }
}
window.addEventListener('scroll', blurHeader)
blurHeader()
