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
const lpText = document.querySelectorAll('.lp-1 h1');
let counter = 1;

const showText = setInterval(() => {
    lpText.forEach(text => {
        text.classList.remove('active');
    })
    lpText[`${counter}`].classList.toggle('active');
    counter++;

    if (counter === lpText.length){
        counter = 0;
    }
}, 2000);
