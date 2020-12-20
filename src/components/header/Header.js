import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import DesktopNavigation from './DesktopNavigation';

const Header = () => {
    const [windowWidth] = useState(window.innerWidth);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
   
    const toggleMenu = () => {
        const menuLogo = document.getElementById('phone_menu_logo');
        const menu = document.getElementById('mobile_menu');
    
        if (menuLogo.classList.contains('active')) {
            menuLogo.classList.remove('active');
            menu.style.transform = 'translateX(110%)';
            menu.style.transition = 'all 0.8s ease';
        } else {
            menuLogo.classList.add('active');
            menu.style.transform = 'translateX(0%)';
            menu.style.transition = 'all 0.8s ease'; 
        }
        showMobileMenu ? setShowMobileMenu(false) : setShowMobileMenu(true);

    };

    return(
        <header>
            <div id="company_logo">
                <Link to="/">
                    <h2>Aluminium</h2>
                    <h1>Pixels</h1>
                </Link>
            </div>
            {// show either desktop navbar or hamburger icon
                windowWidth < 1366 ?
                <div id="phone_menu_logo" onClick={ toggleMenu }>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                :
                <DesktopNavigation />
            }
            <div id="shopping_cart">
                <Link to="/shopping_cart">
                    <img src="/img/logo/shopping_cart.svg" alt="shopping cart logo" />
                    Total: $65.00
                </Link>
            </div>
        
            <ul id="mobile_menu" onClick={ toggleMenu }>
                <li><NavLink to="/" activeClassName="active" exact>Home</NavLink></li>
                <li><NavLink to="/shop" activeClassName="active">Shop</NavLink></li>
                <li><NavLink to="/artists" activeClassName="active">Artists</NavLink></li>
                <li><NavLink to="/about_us" activeClassName="active">About Us</NavLink></li>
                <li><NavLink to="/contact_us" activeClassName="active">Contact Us</NavLink></li>
                <li><NavLink to="/register" activeClassName="active">Register</NavLink></li>
                <li><NavLink to="/sign_in" activeClassName="active">Sign In</NavLink></li>
            </ul> 
          
        </header>
    )
};

export default Header;