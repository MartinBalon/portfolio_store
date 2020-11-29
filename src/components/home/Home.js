import React from 'react';
import Carousel from './carousel/Carousel';
import Best_Sellers from './best_sellers/Best_sellers';
import Artists from './artists/Artists';
import Reviews from './reviews/Reviews.js';

const Home = () => {
    return (
        <>
            <Carousel />
            <Best_Sellers />
            <Artists />
            <Reviews />
        </>
    )
};

export default Home;