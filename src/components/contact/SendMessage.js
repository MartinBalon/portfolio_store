import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Loading from '../common/Loading';

const SendMessage = (props) => {
    const data = props.location.data || '';
    const [messageSent, setMessageSent] = useState(false);
    const [redirect, setRedirect] = useState(false);
    // scroll to top of the page 
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // send message to api
    useEffect(() => {
        axios
            .post('/api/send_message', data)
            .then( response => {
                if (response.status === 200) {
                    setMessageSent(true);
                }
            });
    }, [data]);

    // redirect to my account
    useEffect(() => {
        const timer = setTimeout(() => {
            setRedirect(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, [messageSent]);

    return (
        
        <div className="container">
            {
                redirect ?
                <Redirect to='/home' />
                :
                <>
                    {
                        messageSent ?
                        <div className="xs-w-80 xs-m-t-20 xs-m-b-20">
                            <h1 className="xs-m-b-5">Message sent.</h1>
                            <p className="center">We are going to redirect you to home page.</p>
                        </div>
                        :
                        <Loading errorMessage={'We were unable to send the message.'} />
                    }
                </>
            }
        </div>
    )
};

export default SendMessage
