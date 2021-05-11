import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="clearfix footer-container">
                <div className="column xs-m-b-5 m-m-b-2 xs-fs-13em l-w-30">
                    <p>Delivery</p>
                    <p>Terms &amp; Conditions</p>
                    <p>Guarantee</p>
                    <p>Q &amp; A</p>
                </div>
                <div className="column xs-m-b-5 m-m-b-2 xs-fs-13em l-w-30">
                    <p>Shop</p>
                    <p>About Us</p>
                    <p>Artists</p>
                    <p>Printing Proccess</p>
                </div>
                <div className="column xs-m-b-5 m-m-b-2 xs-fs-13em l-w-30">
                    <p>Social Media</p>
                    <p>Contact Us</p>
                    <p>Become a Partner</p>
                    <p>Vacancies</p>
                </div>
            </div>
            <div className="footer_social_icons">
                <img src="/img/logo/facebook_light.svg" alt="facebook logo" />
                <img src="/img/logo/twitter_light.svg" alt="twitter logo" />
                <img src="/img/logo/instagram_light.svg" alt="instragram logo" />
            </div>
            <h1 className="xs-fs-2em xs-m-b-2 m-m-b-1">Aluminium Pixels</h1>
            <a href='https://www.freepik.com/vectors/infographic'>
                Infographic vector created by freepik - www.freepik.com
            </a>
        </footer>
    )
};

export default Footer;