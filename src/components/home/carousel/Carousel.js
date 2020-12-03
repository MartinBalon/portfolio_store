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
    if (direction === 'right') {
        // move other slides 'behind the scene' so we can slide them from left to right again
        for(let i = 1; i < slides.length + 1; i++) {
            if (i !== currentSlideId && i !== (currentSlideId + 1)) {
                moveSlide(i, 0, -100, 1, 0);
            }
        }
        // slide current slide to the right
        moveSlide(currentSlideId, 0, 100, 3, 0.5);
        // restart counter in order to create infinite loop of slides
        if (currentSlideId === 1) {
            currentSlideId = slides.length;
        } else {
            currentSlideId--; 
        }
        // slide next slide to the screen
        moveSlide(currentSlideId, -100, 100, 3, 0.5);  
    } else {
        // move other slides 'behind the scene' so we can slide them from right to left again
        for(let i = 1; i < slides.length + 1; i++) {
            if (i !== currentSlideId && i !== (currentSlideId + 1)) {
                moveSlide(i, 0, 100, 1, 0);
            }
        }
        // slide current slide to the left
        moveSlide(currentSlideId, 0, -100, 3, 0.5);
        // restart counter in order to create infinite loop of slides
        if (currentSlideId === 4) {
            currentSlideId = 1;
        } else {
            currentSlideId++; 
        }
        // slide next slide to the screen
        moveSlide(currentSlideId, 100, -100, 3, 0.5); 
    }      
};

const moveSlide = (elementId, leftPercent, translatePercent, zindex, timing) => {
    const element = document.getElementById(elementId);
    element.style.zIndex = zindex;
    element.style.left = `${leftPercent}%`;
    element.style.transform = `translateX(${translatePercent}%)`;
    element.style.transition = `all ${timing}s`; 
};

const Carousel = () => {
    return (
        <div id="carousel">
            <img src="" id="arrow_left" alt="arrow left logo" onClick={() => changeSlide('left')} />
            <img src="" id="arrow_right" alt="arrow right logo" onClick={() => changeSlide('right')} />
            <div id="circles">
                <div id="circles_container">
                {slides.map((slide) => 
                    slide.id === 1 ? 
                    <div key={slide.id} id={"circle" + slide.id} className="circle circle_active"></div>
                    : 
                    <div key={slide.id} id={"circle" + slide.id} className="circle"></div>
                )} 
                </div>
            </div>
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