import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ThankYou = (props) => {
    const [status, setStatus] = useState();
    const [orderNumber, setOrderNumber] = useState();
    const order = props.location.order;

    // axios post data & set status
    useEffect(() => {
        axios
        .post('/api/order', order)
        .then(response => {
            setStatus(response.status);
            setOrderNumber(response.data.orderId);
            },
            error => console.log(error)
        );
    }, [order]);

    // 3) if all went good delete everything from local storage
    
    return (
        <div className="container">
            <div>
            {
                status === 200 ?
                <>
                    <h1>We have received your order. Thank you for your purchase!</h1>
                    <p>Your order number is: {orderNumber}</p>
                    <p>We have sent you a confirmation email to the email address you gave us.</p>
                </>
                :
                <h1>
                    Something went wrong while processing your order.
                </h1>
            }
            </div>
            <div>
                <Link to="/home">Take me back home.</Link>
            </div>
        </div>
    )
};

export default ThankYou;