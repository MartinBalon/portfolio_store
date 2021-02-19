import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Loading from '../common/Loading';

const DeleteAccount = ({ changeCustomer, loginData, changeLoginData }) => {
    const [success, setSuccess] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const data = loginData || '';
    
    // scroll to top of the page 
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // axios - sent passwords to our db
    useEffect(() => {
        axios
            .post('/api/delete_account', data)
            .then( response => {
                if (response.status === 200) {
                    setSuccess(true);
                    // delete customer & login data state
                    changeLoginData('');
                    changeCustomer('');
                }
            })
    }, [data, changeCustomer, changeLoginData]);

    // redirect to my account
    useEffect(() => {
        const timer = setTimeout(() => {
            setRedirect(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, [success]);

    return (
        <div className="container">
            {
                success ?
                <div className="xs-w-80">
                    <h1 className="xs-m-t-20 xs-m-b-10">
                        We have successfully deleted your account.
                    </h1>
                    <h2 className="xs-m-b-20 center">
                        We are re-directing you to home page.
                    </h2>
                    { redirect ? <Redirect to='/home' /> : <></> }
                </div>
                :
                <Loading 
                    errorMessage={'We couldn\'t delete your account. Please try again later.'} 
                />
            }
        </div>
    )
};

export default DeleteAccount;