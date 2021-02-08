import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Loading from '../common/Loading';

const UpdatePassword = (props) => {
    const [success, setSuccess] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const passwords = props.location.passwords || '';

    // scroll to top of the page 
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // axios - sent passwords to our db
    useEffect(() => {
        axios
            .post('/api/update_password', passwords)
            .then( response => {
                if (response.status === 200) {
                    setSuccess(true);
                }
            })
    }, [passwords]);

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
                        We have successfully changed your password.
                    </h1>
                    <h2 className="xs-m-b-20">
                        We are re-directing you back to your account page.
                    </h2>
                    { redirect ? <Redirect to='/my_account' /> : <></> }
                </div>
                :
                <Loading 
                    errorMessage={'We couldn\'t change your password. Please try again later.'} 
                />
            }
        </div>
    )
};

export default UpdatePassword;