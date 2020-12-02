import React, { useState } from 'react';

const slides = [
    {
        id: 1,
        color: 'white',
        backgroundColor: 'grey',
        h1: 'First Slide',
        p: 'This is first slide'
    }, 
    {
        id: 2,
        color: 'black',
        backgroundColor: 'white',
        h1: 'Second Slide',
        p: 'This is second slide'
    },
    {
        id: 3,
        color: 'green',
        backgroundColor: 'pink',
        h1: 'Third Slide',
        p: 'This is third slide'
    },
    {
        id: 4,
        color: 'yellow',
        backgroundColor: 'blue',
        h1: 'Fourth Slide',
        p: 'This is fourth slide'
    }
];

let currentSlideId = slides.length;

const changeSlide = (direction) => {
 
    if (direction === 'right' && currentSlideId > 1) {
        const elementA = document.getElementById(currentSlideId);
        elementA.style.transform = 'translateX(100%)';
        elementA.style.left = '0%';
        elementA.style.transition = 'all 1s';
    
        currentSlideId--;
    
        const elementB = document.getElementById(currentSlideId);
        elementB.style.left = '-100%';
        elementB.style.transform = 'translateX(100%)';
        elementB.style.transition = 'all 1s'; 
    } else if (direction === 'left' && currentSlideId < 4) {
        const elementA = document.getElementById(currentSlideId);
        elementA.style.left = '0%';
        elementA.style.transform = 'translateX(-100%)';
        elementA.style.transition = 'all 1s';
        
        currentSlideId++;

        const elementB = document.getElementById(currentSlideId);
        elementB.style.transform = 'translateX(0%)';
        elementB.style.transition = 'all 1s'; 
    }
      
};

const Carousel = () => {
    return (
        <div id="carousel">
            <img src="" id="arrow_left" alt="arrow left logo" onClick={() => changeSlide('left')} />
            <img src="" id="arrow_right" alt="arrow right logo" onClick={() => changeSlide('right')} />
            <div id="circles"></div>
            {slides.map(slide =>(
                <div id={slide.id} key={slide.id} className="slide" style={{  
                    backgroundColor: `${slide.backgroundColor}`
                }}>
                    <h1 style={{color: `${slide.color}`}}>{slide.h1}</h1>
                    <p style={{color: `${slide.color}`}}>{slide.p}</p>
                </div>
            ))}
        </div>
    )
};

export default Carousel;