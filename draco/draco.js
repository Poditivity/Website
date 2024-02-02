


const elements = document.querySelectorAll('.element');
const texts = document.querySelector('.header-container .text-container');
const lines = document.querySelectorAll('.lines');



document.querySelector('header').addEventListener('mousemove' , (e) =>{
    elements.forEach(ele => {
        let moveValue = ele.getAttribute('data-value');
        let x = (e.clientX * moveValue) / 250;
        let y = (e.clientY * moveValue) / 250;
        ele.style.transform = `translateX(${x}px) translateY(${y}px) rotateZ(var(--rotate-angle))`;
        texts.style.transform = `translateX(${x * -2}px) translateY(${y * 2}px)`;
    })   
})

elements.forEach(ele => {
    ele.addEventListener('mouseover' , () => {  
        ele.style.transform = `rotate(0deg)`
    })
})