"use strict"

const elPlanBlock = document.querySelector('.coffee_plan');
const elPlanToggler1 = document.querySelector('.plan-toggler1');
const elPlanToggler2 = document.querySelector('.plan-toggler2');
const elPlanToggler3 = document.querySelector('.plan-toggler3');
const elPlanToggler4 = document.querySelector('.plan-toggler4');
const elPlanToggler5 = document.querySelector('.plan-toggler5');


if (elPlanToggler1) {
    elPlanToggler1.addEventListener('click', function () {
        elPlanBlock.classList.toggle('coffee_plan--open1')
    })
}
if (elPlanToggler2) {
    elPlanToggler2.addEventListener('click', function () {
        elPlanBlock.classList.toggle('coffee_plan--open2')
    })
}
if (elPlanToggler3) {
    elPlanToggler3.addEventListener('click', function () {
        elPlanBlock.classList.toggle('coffee_plan--open3')
    })
}
if (elPlanToggler4) {
    elPlanToggler4.addEventListener('click', function () {
        elPlanBlock.classList.toggle('coffee_plan--open4')
    })
}
if (elPlanToggler5) {
    elPlanToggler5.addEventListener('click', function () {
        elPlanBlock.classList.toggle('coffee_plan--open5')
    })
}
// const elPlanBlock = document.querySelector('.coffee_plan');
// const elsPlanToggler = document.querySelectorAll('.coffee_plan--toggler');


// // if (elsPlanToggler) {
// //     elsPlanToggler.addEventListener('click', function () {
// //         elPlanBlock.classList.toggle('coffee_plan--open')
// //     })
// // }

// elsPlanToggler.forEach(function () {
//     elsPlanToggler.addEventListener('click', function () {
//         elPlanBlock.classList.toggle('coffee_plan--open')
//     });
// })





