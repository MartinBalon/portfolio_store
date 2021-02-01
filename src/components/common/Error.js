import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="error_message">
            <h1>We are really sorry but something went wrong.</h1>
            <h2>Please make sure not to refresh the page while making the order.</h2>
            <div className="button">
                <Link to="/home" style={{color: 'white'}}>Take me back home</Link>
            </div>
        </div>
    )
};

export default Error;