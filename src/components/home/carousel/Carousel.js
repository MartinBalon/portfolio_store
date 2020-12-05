import React from 'react';
import slides from './CarouselData';

let currentSlideId = slides.length;
let circleId = 1;
const windowWidth = window.innerWidth;

const changeSlide = (direction) => {
    if (direction === 'left') {
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
        // update circles
        if (circleId === slides.length) {
            circleId = 1;
        } else {
            circleId++;
        }
        changeCircle(circleId);  
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
        // update circles
        if (circleId === 1) {
            circleId = slides.length;
        } else {
            circleId--;
        }
        changeCircle(circleId);   
    }      
};

const changeCircle = (slideId) => {
    const circles = document.getElementsByClassName('circle');
    const circleId = `circle${slideId}`;
    for(let i = 0; i < circles.length; i++) {
        if (circleId === circles[i].id) {
            circles[i].classList.add('circle_active');
        } else if(circles[i].classList.contains('circle_active')) {
            circles[i].classList.remove('circle_active');
        }   
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
            <img src="/img/logo/arrow_left.svg" id="arrow_left" alt="arrow left logo" onClick={() => changeSlide('left')} />
            <img src="/img/logo/arrow_right.svg" id="arrow_right" alt="arrow right logo" onClick={() => changeSlide('right')} />
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
                    {
                        windowWidth <= 450 ?
                        <img src={slide.imgSmall} alt={slide.h1} className="slideImg" />
                        :
                        <img src={slide.imgLarge} alt={slide.h1} className="slideImg" />
                    }
                    <p style={{color: `${slide.color}`}}>{slide.p}</p>
                    <a href={slide.a} target="_blank" rel="noreferrer">DISCOVER MORE</a>
                </div>
            ))}
        </div>
    )
};

export default Carousel;