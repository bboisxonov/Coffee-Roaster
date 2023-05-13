const elsPlanToggler = document.querySelectorAll('.plan-toggler');
elsPlanToggler.forEach(function (elsPlanToggler) {
        elsPlanToggler.addEventListener('click', function () {
                elsPlanToggler.nextElementSibling.classList.toggle('plan-card')
            })
        })
        
const elSiteHeader = document.querySelector('.header');
const elSiteToggler = document.querySelector('.header_toggler');

if(elSiteToggler){
        elSiteToggler.addEventListener('click', function(){
                elSiteHeader.classList.toggle('header--open')
        })
}


        
        
        
        
        
        // elsPlanToggler.forEach(function (elsPlanToggler) {
        //     console.log(elsPlanToggler.parentElement.parentElement.parentElement);
        
        // })
















// -------------------------------------------------------------------------------------------------------











// const elPlanBlock = document.querySelector('.coffee_plan');
// const elPlanToggler1 = document.querySelector('.plan-toggler1');
// const elPlanToggler2 = document.querySelector('.plan-toggler2');
// const elPlanToggler3 = document.querySelector('.plan-toggler3');
// const elPlanToggler4 = document.querySelector('.plan-toggler4');
// const elPlanToggler5 = document.querySelector('.plan-toggler5');

// const elPlanTitle1 = document.querySelector('.plan-title__curent1');
// const elPlanTitle2 = document.querySelector('.plan-title__curent2');
// const elPlanTitle3 = document.querySelector('.plan-title__curent3');
// const elPlanTitle4 = document.querySelector('.plan-title__curent4');
// const elPlanTitle5 = document.querySelector('.plan-title__curent5');


// if (elPlanToggler1) {
//     elPlanToggler1.addEventListener('click', function () {
//         elPlanBlock.classList.toggle('coffee_plan--open1')
//         elPlanTitle1.classList.toggle('current')
//     })
// }
// if (elPlanToggler2) {
//     elPlanToggler2.addEventListener('click', function () {
//         elPlanBlock.classList.toggle('coffee_plan--open2')
//         elPlanTitle2.classList.toggle('current')
//     })
// }
// if (elPlanToggler3) {
//     elPlanToggler3.addEventListener('click', function () {
//         elPlanBlock.classList.toggle('coffee_plan--open3')
//         elPlanTitle3.classList.toggle('current')
//     })
// }
// if (elPlanToggler4) {
//     elPlanToggler4.addEventListener('click', function () {
//         elPlanBlock.classList.toggle('coffee_plan--open4')
//         elPlanTitle4.classList.toggle('current')
//     })
// }
// if (elPlanToggler5) {
//     elPlanToggler5.addEventListener('click', function () {
//         elPlanBlock.classList.toggle('coffee_plan--open5')
//         elPlanTitle5.classList.toggle('current')
//     })
// }


























// -----------------------------------------------------------------------------------------------------------
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





