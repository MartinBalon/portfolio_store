import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="column">
                <p>Delivery</p>
                <p>Terms &amp; Conditions</p>
                <p>Guarantee</p>
                <p>Q &amp; A</p>
            </div>
            <div className="column">
                <p>Shop</p>
                <p>About Us</p>
                <p>Artists</p>
                <p>Printing Proccess</p>
            </div>
            <div className="column">
                <p>Social Media</p>
                <p>Contact Us</p>
                <p>Become a Partner</p>
                <p>Vacancies</p>
            </div>
            <div className="column">
                <div>
                    <img src="/img/logo/facebook_light.svg" alt="facebook logo" />
                    <img src="/img/logo/twitter_light.svg" alt="twitter logo" />
                    <img src="/img/logo/instagram_light.svg" alt="instragram logo" />
                </div>
                <h1>Aluminium Pixels</h1>
            </div>
            <a href='https://www.freepik.com/vectors/infographic'>Infographic vector created by freepik - www.freepik.com</a>
        </footer>
    )
};

export default Footer;