import React from 'react';
import { Link } from 'react-router-dom';

const Error = ({ message }) => {
    const errorMessage = message || 
        `Please make sure not to refresh the page while making the order.`;

    return (
        <div className="xs-w-80 xs-m-b-20 xs-m-t-20">
            <h1 className="xs-m-b-10">We are really sorry but something went wrong.</h1>
            <h2 className="xs-m-b-10 center">{ errorMessage }</h2>
            <Link to="/home">
                <div className="button xs-w-180px">
                    Take me back home
                </div>
            </Link>
        </div>
    )
};

export default Error;