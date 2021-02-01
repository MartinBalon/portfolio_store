import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loading from '../common/Loading';
import Error from '../common/Error';

const OrderConfirmation = ({order, changePrice, changeProducts}) => {
    const [status, setStatus] = useState();
    const [orderNumber, setOrderNumber] = useState();
    const completeOrder = order;
    
    // scroll to the top of the page
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // axios post data & set status
    useEffect(() => {
        axios
        .post('/api/order', completeOrder)
        .then(  response => {
            setStatus(response.status);
            setOrderNumber(response.data.orderId);
            },
            error => {
                console.log(error)
                setStatus(500);  
            } 
        );
    }, [completeOrder]);

    // delete everything from local storage & set total amount and total qty in header to 0
    useEffect(() => {
        if (status === 200) {
            changePrice(0);
            changeProducts(0);
            localStorage.clear();
        } 
    }, [status, changePrice, changeProducts])
    
    return (
        <div className="container">
            {
                status ?
                    <div id="order_confirmation">
                    {
                        status === 200 ?
                        <>
                            <h1>We have received your order. Thank you for your purchase!</h1>
                            <h2>Your order number is: {orderNumber}.</h2>
                            <p>We have sent you a confirmation email to the email address you gave us.</p>
                        </>
                        :
                        <Error />
                    }
                    <div className="button">
                        <Link to="/home" style={{color: 'white'}}>Take me back home</Link>
                    </div>
                </div>
                :
                <Loading />
            }
        </div>
    )
};

export default OrderConfirmation;