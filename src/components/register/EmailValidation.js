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
                <div className="xs-w-80 xs-m-t-20 xs-m-b-20">
                    <h1 className="xs-m-b-10">
                        Thank you, { name } for verifying your email.
                    </h1>
                    <Link to="/sign_in">
                        <div className="button xs-w-100px">
                            Sign in
                        </div>
                    </Link>
                </div>
                :
                <Loading />
            }
        </div>
    )
};

export default EmailValidation;