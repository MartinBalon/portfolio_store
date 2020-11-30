import React from 'react';

const Header = () => {
    return(
        <header>
            <div id="company_logo">
                <h2>Aluminium</h2>
                <h1>Pixels</h1>
            </div>
            <nav>
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
            <div id="shopping cart">
                <div>
                    <img src="" alt="shipping cart logo" />
                    Total: $65.00
                </div>
                <div>
                    Currency: $ US Dollar
                </div>
            </div>
        </header>
    )
};

export default Header;