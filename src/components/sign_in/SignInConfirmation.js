import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Loading from '../common/Loading';
import axios from 'axios';

const SignInConfirmaiton = ({ loginData, changeCustomer, changeLoginData }) => {
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    const [redirect, setRedirect] = useState(false);
    // scroll to top of the page 
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // axios call to the DB to verify customer
    useEffect(() => {
        axios
            .post('/api/login', loginData)
            .then( response => {
                if (response.status === 200) {
                   setUserLoggedIn(true);
                   // set customer -> global state
                   changeCustomer(response.data);
                } else if (response.status === 205) {
                    setErrorMessage('Either your email or password is wrong.');
                } else {
                    setErrorMessage('Your email has not been verified yet.');
                }
                // remove login data state
                changeLoginData('');
            })
    },[]);// eslint-disable-line react-hooks/exhaustive-deps

    // redirect to home page after user is logged in
    useEffect(() => {
        const timer = setTimeout(() => {
            setRedirect(true);
        }, 2000);
        return () => clearTimeout(timer);
    },[userLoggedIn]);

    return (
        <div className="container">
            {
                userLoggedIn ?
                <div className="xs-w-80">
                    <h1 className="xs-m-t-20 xs-m-b-10">
                        You've been logged in.
                    </h1> 
                    <h2 className="xs-m-b-20">
                        We are going to re-direct you back to home page.
                    </h2>
                    {
                        redirect ? <Redirect to='/home' /> : <></>
                    }
                </div>
                :
                <Loading errorMessage={ errorMessage } />
            }
        </div>
    )
};

export default SignInConfirmaiton;