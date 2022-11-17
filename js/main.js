const hamburger = document.querySelector('.hamburger');
const dropmenu = document.querySelector('.dropmenu')
const homebtn = document.querySelector('.homebtn');
const rulesbtn = document.querySelector('.rulesbtn');
const aboutbtn = document.querySelector('.aboutbtn');
const applybtn = document.querySelector('.applybtn');

hamburger.addEventListener('click', function () {
    this.classList.toggle('is-active');
    dropmenu.classList.toggle('is-active');
});

