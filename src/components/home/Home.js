import React from 'react';
import Carousel from './carousel/Carousel';
import BestSellers from './best_sellers/BestSellers';
import Artists from './artists/Artists';
import Reviews from './reviews/Reviews';
import Intro from './introduction/Intro';

const Home = () => {
    return (
        <div className="container">
            <Carousel />
            <Intro />
            <BestSellers />
            <Artists />
            <Reviews />
        </div>
    )
};

export default Home;