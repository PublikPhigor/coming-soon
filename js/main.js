//countdown 
let countdownDate = new Date("March 30, 2021 17:00:00").getTime();
const x = setInterval(() => {
    let now = new Date().getTime();
    let distance = countdownDate - now;

    let days = parseInt(Math.floor(distance / (1000 * 60 * 60 * 24)));
    let hours = parseInt(Math.floor(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = parseInt(Math.floor(distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = parseInt(Math.floor(distance % (1000 * 60)) / (1000));

    document.querySelector('#day').innerHTML = days;
    document.querySelector('#hour').innerHTML = hours;
    document.querySelector('#minute').innerHTML = minutes;
    document.querySelector('#second').innerHTML = seconds;

}, 1000);

//fade 
// const lpText = document.querySelectorAll('.lp-1 h1');
// let counter = 1;

// const showText = setInterval(() => {
//     lpText.forEach(text => {
//         text.classList.remove('active');
//     })
//     lpText[`${counter}`].classList.toggle('active');
//     counter++;

//     if (counter === lpText.length){
//         counter = 0;
//     }
// }, 6000);

// var textWrapper = document.querySelector('.ml2.active');
//     textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
//     anime.timeline({loop: true})
//     .add({
//         targets: '.ml2 .letter',
//         scale: [3,1],
//         opacity: [0,1],
//         translateZ: 0,
//         easing: "easeOutExpo",
//         duration: 1950,
//         delay: (el, i) => 200*i
//     }).add({
//         targets: '.ml2',
//         opacity: 0,
//         duration: 2000,
//         easing: "easeOutExpo",
//     });


var ml4 = {};
ml4.opacityIn = [0,1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = 3;
ml4.durationIn = 800;
ml4.durationOut = 600;
ml4.delay = 500;

anime.timeline({loop: true})
  .add({
    targets: '.ml4 .letters-1',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-1',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-2',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-2',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-3',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-3',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-4',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-4',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4',
    opacity: 0,
    duration: 500,
    delay: 500
  });
  