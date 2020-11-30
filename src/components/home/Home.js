import React from 'react';
import Carousel from './carousel/Carousel';
import BestSellers from './best_sellers/BestSellers';
import Artists from './artists/Artists';
import Reviews from './reviews/Reviews.js';

const Home = () => {
    return (
        <>
            <Carousel />
            <BestSellers />
            <Artists />
            <Reviews />
        </>
    )
};

export default Home;