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