import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = (props) => {
    const message = props.location.message;
    return (
        <div className="container">
            <div>
                {
                message ?
                message
                :
                'Thank you!'
                }
            </div>
            <div>
                <Link to="/home">Take me back home.</Link>
            </div>
        </div>
    )
};

export default ThankYou;