import React, { useState } from 'react';
import CarouselContent from './CarouselContent';

const Carousel = () => {
    return (
        <div id="carousel">
            <CarouselContent translate={150} />
        </div>
    )
};

export default Carousel;