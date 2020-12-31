import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const Header = () => {
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

            <div id="phone_menu_logo" onClick={ toggleMenu }>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div id="shopping_cart">
                <Link to="/shopping_cart">
                    <img src="/img/logo/shopping_cart.svg" alt="shopping cart logo" />
                    Total: $65.00
                </Link>
            </div>
        
            <ul id="mobile_menu" onClick={ toggleMenu }>
                <Navigation />
            </ul> 
          
        </header>
    )
};

export default Header;