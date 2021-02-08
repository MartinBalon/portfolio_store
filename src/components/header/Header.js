import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const Header = ({ totalAmount, customer }) => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    // total price comes from local storage as string so we need to convert it to a number 
    // so we can apply toFixed to show only two decimals
    // if amount saved in state use state values otherwise use the one from local storage
    let amount;

    if (totalAmount > 0) {
        amount = totalAmount;
    } else if (totalAmount === 0 && !localStorage.getItem('amount')) {
        amount = 0;
    } else {
        amount = localStorage.getItem('amount');
    }

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
                <Link to="/home">
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
                    <div id="total_amount">{ amount }</div>
                </Link>
            </div>
                            
            <ul id="mobile_menu" onClick={ toggleMenu }>
                <Navigation customer={customer} />
            </ul> 
          
        </header>
    )
};

export default Header;