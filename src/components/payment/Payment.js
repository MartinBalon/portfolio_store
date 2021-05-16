import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Error from '../common/Error';
import ItemOrder from '../common/ItemOrder';

const Payment = ({changeOrder, order}) => {
    // scroll to the top of the page
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    let customer = order;
    const localStorageData = Object.entries(localStorage);
    const [creditCardOwner, setCreditCardOwner] = useState();
    const [cardNumber, setCardNumber] = useState();
    const [expiryDate, setExpiryDate] = useState();
    const [expiryDateError, setExpiryDateError] = useState();
    const [cvc, setCvc] = useState();
    const [agreement, setAgreement] = useState(false);
        
    // set credit card owner based on customer first and last name
    useEffect(() => {
        setCreditCardOwner('Martin Balon');
    }, []);

    const products = [];  
    // get an array of products    
    for (let i = 0; i < localStorageData.length; i++) {
        if (localStorageData[i][0] === 'totalPrice' || localStorageData[i][0] === 'amount') {
            continue;
        } else {
            products.push(JSON.parse(localStorageData[i][1]));
        }
    }

    let subtotal = 0;
    const totalPrice = localStorage.getItem('totalPrice');
    // calculate subtotal again
    for (let i = 0; i < products.length; i++) {
        subtotal += parseFloat(products[i].price * products[i].quantity);
    }
    subtotal = subtotal.toFixed(2);
    const shipment = (totalPrice - subtotal).toFixed(2);

    const handleChange = (value, type) => {
        const numbersAndSpaceRegex = /^[0-9 ]*$/;
        const numbersAndSlashRegex = /^[0-9/]*$/;
        const textRegex = /^[a-zA-ZÀ-ž ]*$/;
        // Card Owner Field
        if (type === 'creditCardOwner' && textRegex.test(value)) {
            setCreditCardOwner(value);
        // Card Number Field
        } else if (type === 'cardNumber' && numbersAndSpaceRegex.test(value)) {
            let lastNumber = value.substring(value.length - 1, value.length);
            if (cardNumber && (
                (cardNumber.length === 3  && value.length === 4) ||
                (cardNumber.length === 8  && value.length === 9) ||
                (cardNumber.length === 13 && value.length === 14)
                )) {
                    // Add blank space after 4 digits
                    setCardNumber(value + ' ')   
            } else if (cardNumber && (
                (cardNumber.length === 4  && value.length === 5)  ||
                (cardNumber.length === 9  && value.length === 10) ||
                (cardNumber.length === 14 && value.length === 15)
                )) {
                    // Add blank space after deleting part of the string
                    setCardNumber(cardNumber + ' ' + lastNumber)
            } else if (value.length < 20) {
                setCardNumber(value) 
            }     
        } else if (type === 'expiryDate' && value.length < 6 && numbersAndSlashRegex.test(value)) {
            // check date first to make sure user won't enter wrong date
            // getMonth returns values 0 - 11 hence + 1
            let month = (new Date().getMonth() + 1).toString();
            let year = new Date().getFullYear().toString().substring(2, 4);
            if (month <= 10) {
                month = '0' + month;
            }
            // reset warning message
            if (expiryDateError) {
                setExpiryDateError('');
            }
            // update expiry date value
            if (value.length === 2 && expiryDate.length === 1) {
                setExpiryDate(value + '/')
            } else {
                setExpiryDate(value);
            }
            // check whether card isn't expired && wrong month
            if (value.length === 5) {
                const userMonth = value.substring(0, 2);
                const userYear = value.substring(3, 5);
                if ((userYear === year && userMonth < month) || userYear < year) {
                    setExpiryDateError('Your card expired!');
                    setExpiryDate('');
                } else if (userMonth <= 0 || userMonth > 12) {
                    setExpiryDateError('Your card expired!');
                    setExpiryDate('');
                }
            }
        } else if (type === 'cvc' && value.length < 4 && !isNaN(value)) {
            setCvc(value);
        }
    }

    const showHideCardSystem = () => {
        // hide the wrong card system - show only visa or mastercard
        if (cardNumber && cardNumber.substring(0, 1) === '4') {
            return <img src="/img/logo/visa.svg" alt="visa logo" />;
        } else if (cardNumber && cardNumber.substring(0, 1) === '5') {
            // setting opacity to zero as not to show the img - if we remove it from the DOM
            // mastercard img shifts to the left even though the absolute positioning
            return  <>
                <img src="/img/logo/visa.svg" id="visa" alt="visa logo" style={{opacity: 0}} />
                <img src="/img/logo/mastercard.svg" id="mastercard" alt="mastercard logo" /> 
            </>
        } else {
            return <>
                <img src="/img/logo/visa.svg" id="visa" alt="visa logo" />
                <img src="/img/logo/mastercard.svg" id="mastercard" alt="mastercard logo" /> 
            </>
        }  
    }
  
    return (
        <div className="container">
            {
                customer ?
                <div className="xs-w-90 clearfix payment-wraper">
                    <h1 className="xs-m-t-5 xs-m-b-5 xs-fs-16em">Summary of your order</h1>
                    <div className="payment_left">
                        <div className="clearfix">
                            <div className="xs-m-b-5 m-m-b-2">
                                <h2 className="bold">Your contact details:</h2>
                                <p>{ customer.firstName } { customer.lastName }</p>
                                <p>{ customer.email }</p>
                                <p>{ customer.phone }</p>
                            </div>
                            <div className="xs-m-b-5">
                                <h2 className="bold">Delivery address:</h2>
                                <p>{ customer.street }</p>
                                <p>{ customer.town }</p>
                                <p>{ customer.postCode }</p>
                            </div>
                        </div>
                        <div className="payment_container">
                            <h2 className="bold xs-m-b-2">Your order:</h2>                    
                            {
                                products.map((product, i) => (
                                    <ItemOrder product={ product } key={ i } />                          
                                ))
                            }
                            <div className="clearfix xs-m-t-5 xs-m-b-5 bold">
                                <div className="left">
                                    <h2>Subtotal:</h2>
                                    <h2>Shipment:</h2>
                                    <h2>Total:</h2>
                                </div>
                                <div className="left xs-m-l-5">
                                    <h2>${ subtotal }</h2>
                                    <h2>${ shipment }</h2>
                                    <h2>${ totalPrice }</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="payment_container payment_right">
                        <h2 className="bold">Choose your payment method:</h2>
                        <p className="warning">
                            Google pay &amp; Apple pay don't work. <br />
                            Use fake credit card only.
                        </p>
                        <div className="payment_method">
                            <img src="/img/logo/google_pay.svg" alt="google pay logo" />
                            <img src="/img/logo/apple_pay.svg" alt="apple pay logo" />     
                        </div>
                        <h2>Credit or Debit card</h2>
                        <div id="credit_card_container">
                            <div className="clearfix">
                                <div className="icons right">
                                    { showHideCardSystem() }
                                </div>
                                <div className="card_owner left">
                                    <label htmlFor="card_owner">Card owner:</label>
                                    <input 
                                        type="text"
                                        name="card_owner"
                                        value={ creditCardOwner || '' }  
                                        onChange={ (event) => 
                                            handleChange(event.target.value, 'creditCardOwner')}
                                    />
                                </div>
                            </div>
                            <div className="number">
                                <label htmlFor="car_number">Card number:</label>
                                <input 
                                    type="text" 
                                    name="card_number"
                                    value={ cardNumber || '' }
                                    onChange={ (event) => 
                                        handleChange(event.target.value, 'cardNumber')}
                                />
                            </div>
                            <div className="clearfix">
                                <div className="expiry left">
                                    <label htmlFor="expiry_date">Expiry date:</label>
                                    <input
                                        type="text" 
                                        name="expiry_date"
                                        value={ expiryDate || '' }
                                        onChange={ (event) => 
                                            handleChange(event.target.value, 'expiryDate')} 
                                    />
                                </div>
                                <div className="security_code left">
                                    <label htmlFor="cvc">cvv/cvc:</label>
                                    <input 
                                        type="password" 
                                        name="cvc"
                                        value={ cvc || '' }
                                        onChange={ (event) => 
                                            handleChange(event.target.value, 'cvc')}  
                                    />
                                </div>
                                <img src="/img/logo/cvc.svg" className="cvc" alt="cvc logo" />
                            </div>
                            {
                                expiryDateError ? 
                                <span style={{ color: 'red' }}>{ expiryDateError }</span>
                                :
                                false
                            }
                        </div>
                        <div>
                            <input 
                                type="checkbox" 
                                name="terms_conditions_agreement"
                                onChange={ () => {
                                    agreement ? setAgreement(false) : setAgreement(true)
                                }}
                            />
                            I agree with terms &amp; conditions
                        </div>
                        <div className="xs-m-b-10 xs-m-t-5">
                            {   
                                agreement ?
                                <Link 
                                    to="/order_confirmation"  
                                    // update order - lifting the state up
                                    onClick={() => {
                                        changeOrder({
                                            firstName: customer.firstName,
                                            lastName: customer.lastName,
                                            email: customer.email,
                                            phone: customer.phone,
                                            street: customer.street,
                                            town: customer.town,
                                            postCode: customer.postCode,
                                            products: products,
                                            totalPrice: '$' + totalPrice,
                                            subtotal: '$' + subtotal,
                                            shipment: '$' + shipment
                                        });
                                    }}
                                >
                                    <div className="button xs-w-100px" style={{ margin: '0' }}>
                                        Pay
                                    </div>
                                </Link>
                                :
                                <div className="button xs-w-100px" style={{ margin: '0' }}>
                                    Pay
                                </div>
                            }
                        </div>
                    </div>
                </div>
                :
                <Error />
            }     
        </div>
    )
};

export default Payment;