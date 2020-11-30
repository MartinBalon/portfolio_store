import React from 'react';

const Header = () => {
    return(
        <header>
            <div id="company_logo">
                <h2>Aluminium</h2>
                <h1>Pixels</h1>
            </div>
            <nav className="desktop">
                <ul>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>Artists</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Register</li>
                    <li>Sign In</li>
                </ul>
            </nav>
            <nav className="mobile">
                <div id="phone_menu_logo">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="hidden">
                    <ul>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>Artists</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Register</li>
                        <li>Sign In</li>
                    </ul> 
                </div>
            </nav>
            <div id="shopping_cart">
                <div>
                    <p></p>
                    <img src="/img/logo/shopping_cart.svg" alt="shopping cart logo" />
                    Total: $65.00
                </div>
                <div>
                    Currency: $USD
                </div>
            </div>
        </header>
    )
};

export default Header;