import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Loading from '../common/Loading';

const EmailValidation = () => {
    const [name, setName] = useState();
    const code = useParams();
    
    // set request to API to send verify email
    useEffect(() => {
        axios
            .post('/api/validate_email', code)
            .then( response => {
                if (response.status === 200) {
                    setName(response.data.name);
                } 
            });
    }, [code]);

    return (
        <div className="container">
            {
                name ?
                <div className="email_verified">
                    <h1>Thank you, {name} for verifying your email.</h1>
                    <div className="button">
                        <Link to="/sign_in" style={{ color: 'white' }}>Sign in</Link>
                    </div>
                </div>
                :
                <Loading />
            }
        </div>
    )
};

export default EmailValidation;