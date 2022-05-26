'use strict;'
const cursorPosition = document.querySelector('.cursor-position');
const cursorImage = document.querySelector('.target');
const LineX = document.querySelector('.line-x');
const LineY = document.querySelector('.line-y');    

addEventListener('load', () =>{
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const targetRect = cursorImage.getBoundingClientRect();
        const targetHalfWidth = targetRect.width / 2;
        const targetHalfHeight = targetRect.height / 2;

        cursorPosition.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        cursorPosition.innerText =`(${mouseX}px, ${mouseY}px)`;
        cursorImage.style.transform = `translate(${mouseX-targetHalfWidth}px, ${mouseY-targetHalfHeight}px)`;
        LineX.style.transform = `translateY(${mouseY}px)`;
        LineY.style.transform = `translateX(${mouseX}px)`;
    });
});