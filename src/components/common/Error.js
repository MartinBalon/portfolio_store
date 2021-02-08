import React from 'react';
import { Link } from 'react-router-dom';

const Error = ({ message }) => {
    const errorMessage = message || 
        `Please make sure not to refresh the page while making the order.`;

    return (
        <div className="container">
            <div className="xs-w-80">
                <h1 className="xs-m-b-10">We are really sorry but something went wrong.</h1>
                <h2 className="xs-m-b-10">{ errorMessage }</h2>
                <div className="xs-m-b-20">
                    <Link to="/home">
                        <div className="button">
                            Take me back home
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Error;