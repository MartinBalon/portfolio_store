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
    }, [userData]);
    
    return (
        <div className="container">
            {
                customerCreated === 'yes' ?
                <div className="xs-w-80 xs-m-t-20 xs-m-b-20">
                    <h1 className="xs-m-b-10">
                        Thank you, { userData.firstName }.
                    </h1>
                    <h2 className="xs-m-b-5 center">
                        Your account is nearly ready. <br />
                        We have sent you an email with instruction on how to finish creating 
                        your account.
                    </h2>
                    <p className="xs-m-b-10 center">
                        Email you have provided: { userData.email }
                    </p>
                    <Link to="/home">
                        <div className="button xs-w-180px">
                            Take me back home
                        </div>
                    </Link>
                </div>
                :
                customerCreated === 'exists'?
                <div className="xs-w-80 xs-m-t-20  xs-m-b-20">
                    <h1 className="xs-m-b-10">
                        { userData.firstName }, an account with your email already exists.
                    </h1>
                    <h2 className="xs-m-b-10 center">
                        Please try to sign in using your email. <br /><br />
                        If you have trouble signing in just follow instruction on sign in page.
                    </h2>
                    <Link to="/sign_in">
                        <div className="button xs-w-100px">
                            Sign In
                        </div>
                    </Link>
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