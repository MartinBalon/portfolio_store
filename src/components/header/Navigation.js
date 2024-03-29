import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => {
    return (
        <>
            <li><NavLink to="/" activeClassName="active" exact>Home</NavLink></li>
            <li><NavLink to="/shop" activeClassName="active">Shop</NavLink></li>
            <li><NavLink to="/artists" activeClassName="active">Artists</NavLink></li>
            <li><NavLink to="/about_us" activeClassName="active">About Us</NavLink></li>
            <li><NavLink to="/contact_us" activeClassName="active">Contact Us</NavLink></li>
            {
                props.customer ?
                <>
                    <li><NavLink to="/my_account" activeClassName="active">My Account</NavLink></li>
                    <li><NavLink to="/log_out" activeClassName="active">Log out</NavLink></li>
                </>
                :
                <>
                    <li><NavLink to="/register" activeClassName="active">Register</NavLink></li>
                    <li><NavLink to="/sign_in" activeClassName="active">Sign In</NavLink></li>
                </>
            }
        </>
    )
};

export default Navigation;