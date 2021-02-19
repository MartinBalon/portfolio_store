import React from 'react';
import { Link } from 'react-router-dom';

const Intro = () => {
    return (
        <div className="xs-w-90 xs-m-t-10 xs-m-b-10">
            <h1 className="xs-fs-2em xs-m-b-5">High resolution aluminium prints have never been more affordable!</h1>
            <p className="disclaimer xs-m-b-5"> 
                This is only mock website. You cannot buy or sell anything here. No
                aluminium sheets were harmed during the process. 
            </p>
            <p>
                During the process of creating an aluminium print we use technique called
                &quot;dye sublimation&quot;. 
                This means that we don't print directly on aluminium sheet surface as this leads
                to fragile print that is not scratch resistant and colours are not as vibrant as
                using the technique mentioned above. So how does it work exactly? 
                <Link to="/about_us" style={{ textDecoration: 'underline' }}> Find out more.</Link>
            </p>
        </div>
    )
};

export default Intro;