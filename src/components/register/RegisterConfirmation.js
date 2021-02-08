import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loading from '../common/Loading';

const RegisterConfirmation = (props) => {
    let userData = props.location.userdata;
    const [customerCreated, setCustomerCreated] = useState();
    const message = `We are really sorry but we couldn't set up our account. Please try again later.`;

    // scroll to top of the page 
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    // set request to API to send register email to the user
    useEffect(() => {
        axios
            .post('/api/register_new_customer', userData)
            .then( response => {
                if (response.status === 200) {
                    setCustomerCreated('yes');
                } else if (response.status === 204) {
                    setCustomerCreated('exists');
                }
            });
    },[userData]);
    
    return (
        <div className="container">
            {
                customerCreated === 'yes' ?
                <div className="register_confirm_message">
                    <h1>Thank you, {userData.firstName}.</h1>
                    <h2>
                        Your account is nearly ready. <br />
                        We have sent you an email with instruction on how to finish creating 
                        your account.
                    </h2>
                    <p>Email you have provided: {userData.email}</p>
                    <div className="button">
                        <Link to="/home" style={{ color: 'white' }}>Take me back home</Link>
                    </div>
                </div>
                :
                customerCreated === 'exists'?
                <div className="register_confirm_message">
                    <h1>{userData.firstName}, an account with your email already exists.</h1>
                    <h2>
                        Please try to sign in using your email. <br />
                        If you have trouble signing in just follow instruction on sign in page.
                    </h2>
                    <div className="button">
                        <Link to="/sign_in" style={{ color: 'white' }}>Sign In</Link>
                    </div>
                </div>
                :
                <div>
                    <Loading errorMessage={ message } />
                </div>                
            }
        </div>
    )
};

export default RegisterConfirmation;