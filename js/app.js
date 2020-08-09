
function scrollAppear(){
  let textes = document.querySelector('h3');
  let textesPos = textes.getBoundingClientRect().top;
  let screenPos = window.innerHeight / 2;

  if(textesPos < screenPos){
    textes.classList.add('anim-text_appear')
  }
}
window.addEventListener('scroll', scrollAppear)


function scrollAppear2(){
  let textes2 = document.querySelector('.h3');
  let textesPos2 = textes2.getBoundingClientRect().top;
  let screenPos2 = window.innerHeight / 2;

  if(textesPos2 < screenPos2){
    textes2.classList.add('anim-text_appear')
  }
}
window.addEventListener('scroll', scrollAppear2)

const intro = document.querySelector(".video_3d");
const video = intro.querySelector("video");
const text = intro.querySelectorAll(".dwn");


var isMobile = {
  Android:        function() { return navigator.userAgent.match(/Android/i) ? true : false; },
  BlackBerry:     function() { return navigator.userAgent.match(/BlackBerry/i) ? true : false; },
  iOS:            function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false; },
  Windows:        function() { return navigator.userAgent.match(/IEMobile/i) ? true : false; },
  any:            function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());  }
};

if ( !isMobile.any() ) {

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 2500,
  triggerElement: intro,
  triggerHook: 0,
})
  .setPin(intro)
  .addTo(controller);

//Text Animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });


let scene2 = new ScrollMagic.Scene({
  duration: 2500,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller);

//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});


setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  video.currentTime = delay;
}, 50);


}


function changeBG() {
  if(this.scrollY > 3900){
    document.body.classList.add("white")
  }else{
    document.body.classList.remove("white")
  }
}
window.addEventListener("scroll", changeBG)

// var rellax = new Rellax('.rellax');
var rellax = new Rellax(".rellax", {
  breakpoints: [576, 768, 1201]
});


let preloaderEl = document.getElementById('preloader');
function work() {  
 preloaderEl.classList.remove('visible');
preloaderEl.classList.add('hidden'); }

if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', work);
} else {
  work();
}


$(document).ready(function(){
  $('.slider-wrap').slick({
    slidesToShow: 2.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:5000,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
    appendArrows: $('.arrow'),
            prevArrow: '<button id="prev"><svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 0C10.3164 0 0 10.3164 0 23C0 35.6836 10.3164 46 23 46C35.6836 46 46 35.6836 46 23C46 10.3164 35.6836 0 23 0ZM26.707 32.293C27.0977 32.6836 27.0977 33.3164 26.707 33.707C26.5117 33.9023 26.2578 34 26 34C25.7422 34 25.4883 33.9023 25.293 33.707L15.293 23.707C14.9023 23.3164 14.9023 22.6836 15.293 22.293L25.293 12.293C25.6836 11.9023 26.3164 11.9023 26.707 12.293C27.0977 12.6836 27.0977 13.3164 26.707 13.707L17.4141 23L26.707 32.293Z" fill="#333333"/></svg></button>',
            nextArrow: '<button id="next"><svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 0C10.3164 0 0 10.3164 0 23C0 35.6836 10.3164 46 23 46C35.6836 46 46 35.6836 46 23C46 10.3164 35.6836 0 23 0ZM30.707 23.707L20.707 33.707C20.5117 33.9023 20.2578 34 20 34C19.7422 34 19.4883 33.9023 19.293 33.707C18.9023 33.3164 18.9023 32.6836 19.293 32.293L28.5859 23L19.293 13.707C18.9023 13.3164 18.9023 12.6836 19.293 12.293C19.6836 11.9023 20.3164 11.9023 20.707 12.293L30.707 22.293C31.0977 22.6836 31.0977 23.3164 30.707 23.707Z" fill="#333333"/></svg></button>',
           
          });

  });