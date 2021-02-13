import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Loading from '../common/Loading';

const Logout = ({ changeCustomer, changeLoginData }) => {
    const [logout, setLogout] = useState(false);
    const [redirect, setRedirect] = useState(false);
    // scroll to top of the page 
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
 
    // redirect to my account
    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeout(() => {
                // change state of customer
                changeCustomer('');
                setRedirect(true);
            }, 2000);
            setLogout(true);
        }, 2000);
        return () => clearTimeout(timer);
    });

    return (
        <div className="container">
            {
                logout ?
                <div className="xs-m-y-20">
                    <h1>You've been logged out. <br /> Have a good day.</h1>
                    {
                        redirect ?
                        <Redirect to='/home'/>
                        :
                        <></>
                    }
                </div>
                :
                <Loading />
            }
        </div>
    )
};

export default Logout;