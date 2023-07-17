// animation

const observer = new IntersectionObserver((entries)   =>
{
 entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
     entry.target.classList.add('active');
    }


 });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

 
// animation

// counting ad

let valueDisplays = document.querySelectorAll(".num");
let interval = 10000;

// console.log(valueDisplays);
valueDisplays.forEach((valueDisplays) => {
let startValue = 0;
let endValue = parseInt(valueDisplays.getAttribute
("data-val")    ) ;   
// console.log(endValue);

let duration = Math.floor(interval / endValue); 
 let counter = setInterval(function ()  {
    startValue += 1;
    valueDisplays.textContent = startValue;
    if (startValue == endValue){
        clearInterval(counter);
    }
 }, duration );

});
// counting add

// embedded form

// embedded form