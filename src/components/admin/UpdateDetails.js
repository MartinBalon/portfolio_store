import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Loading from '../common/Loading';

const UpdateDetails = ({ customer, changeCustomer }) => {
    const [success, setSuccess] = useState(false);
    const [redirect, setRedirect] = useState(false);
    // scroll to top of the page 
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // axios - sent customer data to our db
    useEffect(() => {
        axios
            .post('/api/update_customer', customer)
            .then( response => {
                if (response.status === 200) {
                    setSuccess(true);
                    // change customer in client based on filtered data saved in DB
                    const updatedCustomer = response.data;
                    changeCustomer({
                        firstName: updatedCustomer.first_name,
                        lastName: updatedCustomer.last_name,
                        email: updatedCustomer.email,
                        phone: updatedCustomer.phone,
                        street: updatedCustomer.street,
                        town: updatedCustomer.town,
                        postCode: updatedCustomer.post_code
                    });
                }
            })
    }, [customer, changeCustomer]);

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
                        We have successfully updated your details.
                    </h1>
                    <h2 className="xs-m-b-20">
                        We are re-directing you back to your account page.
                    </h2>
                    { redirect ? <Redirect to='/my_account' /> : <></> }
                </div>
                :
                <Loading 
                    errorMessage={'We couldn\'t update your profile. Please try again later.'} 
                />
            }
        </div>
    )
};

export default UpdateDetails;