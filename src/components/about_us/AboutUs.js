import React, { useEffect } from 'react';

const AboutUs = () => {
    // scroll to top of the page 
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="container">
            ABOUT US!
        </div>
    )
};

export default AboutUs;