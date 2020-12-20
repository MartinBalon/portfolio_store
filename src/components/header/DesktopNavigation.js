import React from 'react';
import { Link } from 'react-router-dom';

const DesktopNavigation = () => {
    return (
        <ul id="desktop_nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/artists">Artists</Link></li>
            <li><Link to="/about_us">About Us</Link></li>
            <li><Link to="/contact_us">Contact Us</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/sign_in">Sign In</Link></li> 
        </ul>
    )
};

export default DesktopNavigation;