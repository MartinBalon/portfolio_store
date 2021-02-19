import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loading from '../common/Loading';
import Error from '../common/Error';

const OrderConfirmation = ({ order, changePrice, changeProducts, changeOrder }) => {
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
            changeOrder(null)
            changePrice(0);
            changeProducts(0);
            localStorage.clear();
        } 
    }, [status, changePrice, changeProducts, changeOrder])
    
    return (
        <div className="container">
            {
                status ?
                    <div className="xs-w-80 xs-m-t-20 xs-m-b-20">
                    {
                        status === 200 ?
                        <>
                            <h1 className="xs-m-b-10">
                                We have received your order. Thank you for your purchase!
                            </h1>
                            <h2 className="xs-m-b-5 center">
                                Your order number is: { orderNumber }.
                            </h2>
                            <p className="xs-m-b-5 center">
                                We have sent you a confirmation email to the email address you gave 
                                us.
                            </p>
                        </>
                        :
                        <Error />
                    }
                    <Link to="/home">
                        <div className="button xs-w-180px">
                            Take me back home
                        </div>
                    </Link>
                </div>
                :
                <Loading />
            }
        </div>
    )
};

export default OrderConfirmation;