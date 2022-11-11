window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    //slider
    const slider = document.querySelector('#slider');
    const sliderItems = Array.from(slider.children);
    const btnNext = document.querySelector('#next');
    const btnPrev = document.querySelector('#prev');
    // console.log(sliderItems);
    sliderItems.forEach((slide, i) => {
        // console.log(slide);
        slide.dataset.index = i;
        sliderItems[0].setAttribute('data-active', '');
        
        if(i === 0)slide.classList.toggle('active_slider');


    });

    function nextSlide(direction){
        const currentSlide = slider.querySelector('[data-active]');
        const currentSlideIndex = +currentSlide.dataset.index;
        console.log(currentSlide);

        currentSlide.classList.remove('active_slider');
        currentSlide.removeAttribute('data-active');

        let nextSlideIndex;
        if(direction === 'next'){
            nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex  + 1;
        }else if(direction === 'next'){
            nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1  : currentSlideIndex - 1;
        }
        const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
        
        nextSlide.classList.add('active_slider');
        nextSlide.setAttribute('data-active', '');
    }
    btnNext.addEventListener('click', () => {
        nextSlide('next');
    });

});