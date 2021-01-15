import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Payment = (props) => {
    // scroll to the top of the page
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    let customer = props.location.customer; // change let to const later
    // delete this assignment later
    customer = {
        firstName: 'Martin',
        lastName: 'Balon',
        email: 'm.balon@seznam.cz',
        phone: '+420 123 456 789',
        street: 'Moravska 20',
        town: 'Teplice',
        postCode: '415 01'
    };
    // delete this assignment later
 
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
    let subtotal = 0;
    const totalPrice = localStorage.getItem('totalPrice');
  
    // get an array of products    
    for (let i = 0; i < localStorageData.length; i++) {
        if (localStorageData[i][0] === 'totalPrice' || localStorageData[i][0] === 'amount') {
            continue;
        } else {
            products.push(JSON.parse(localStorageData[i][1]));
        }
    }
    // calculate subtotal again
    for (let i = 0; i < products.length; i++) {
        subtotal += parseFloat(products[i].price * products[i].quantity);
    }

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
    console.log(agreement)
    return (
        <div className="container">
            {
                customer ?
                <>
                    <h1>Summary of your order</h1>
                    <div className="payment_container">
                        <div className="inner_container">
                            <h2>Your contact details:</h2>
                            <p>{customer.firstName} {customer.lastName}</p>
                            <p>{customer.email}</p>
                            <p>{customer.phone}</p>
                        </div>
                        <div className="inner_container">
                            <h2>Delivery address:</h2>
                            <p>{customer.street}</p>
                            <p>{customer.town}</p>
                            <p>{customer.postCode}</p>
                        </div>
                    </div>
                    <div className="payment_container">
                        <h2>Your order:</h2>                    
                        {
                            products.map((product, i) => (
                                <div className="product clearfix" key={i}>
                                    <div className="left">
                                        <img 
                                            src={product.image} 
                                            alt={product.alt} 
                                            className="image" 
                                        /> 
                                    </div>
                                    <div className="details">
                                        <p>{product.name}</p>
                                        <p>
                                            {product.size}cm, {product.thickness}mm, {product.finish}
                                        </p>
                                        <p>${product.price}</p>
                                        <p>Quantity: <span>{product.quantity}</span></p>
                                    </div>
                                </div>                           
                            ))
                        }
                        <div className="price clearfix">
                            <div className="left">
                                <h2>Subtotal:</h2>
                                <h2>Shipment:</h2>
                                <h2>Total:</h2>
                            </div>
                            <div className="right">
                                <h2>${subtotal.toFixed(2)}</h2>
                                <h2>${(totalPrice - subtotal).toFixed(2)}</h2>
                                <h2>${totalPrice}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="payment_container">
                        <h2>Choose your payment method:</h2>
                        <p class="warning">
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
                                    {showHideCardSystem()}
                                </div>
                                <div className="card_owner left">
                                    <label htmlFor="card_owner">Card owner:</label>
                                    <input 
                                        type="text"
                                        name="card_owner"
                                        value={creditCardOwner || ''}  
                                        onChange={(event) => 
                                            handleChange(event.target.value, 'creditCardOwner')}
                                    />
                                </div>
                            </div>
                            <div className="number">
                                <label htmlFor="car_number">Card number:</label>
                                <input 
                                    type="text" 
                                    name="card_number"
                                    value={cardNumber || ''}
                                    onChange={(event) => 
                                        handleChange(event.target.value, 'cardNumber')}
                                />
                            </div>
                            <div className="clearfix">
                                <div className="expiry left">
                                    <label htmlFor="expiry_date">Expiry date:</label>
                                    <input
                                        type="text" 
                                        name="expiry_date"
                                        value={expiryDate || ''}
                                        onChange={(event) => 
                                            handleChange(event.target.value, 'expiryDate')} 
                                    />
                                </div>
                                <div className="security_code left">
                                    <label htmlFor="cvc">cvv/cvc:</label>
                                    <input 
                                        type="password" 
                                        name="cvc"
                                        value={cvc || ''}
                                        onChange={(event) => 
                                            handleChange(event.target.value, 'cvc')}  
                                    />
                                </div>
                                <img src="/img/logo/cvc.svg" className="cvc" alt="cvc logo" />
                            </div>
                            {
                                expiryDateError ? 
                                <span style={{color: 'red'}}>{expiryDateError}</span>
                                :
                                false
                            }
                        </div>
                        <div>
                            <input 
                                type="checkbox" 
                                name="terms_conditions_agreement"
                                onChange={() => {
                                    agreement ? setAgreement(false) : setAgreement(true)
                                }}
                            />
                            I agree with terms &amp; conditions
                        </div>
                        <div className="button pay_button">
                            {
                                agreement ?
                                <Link 
                                    to={{
                                        pathname: "/thank_you" ,
                                        message: <div>
                                                    <p>Thank you for not buying anything.</p>
                                                    <p>Your order will never arrive as you are aware.</p>
                                                </div>
                                    }}
                                    style={{color: 'white'}} >
                                    Pay
                                </Link>
                                :
                                'Pay'
                            }
                        </div>
                      
                    </div>
                </>
                :
                <div className="payment_container">
                    <h1>We are sorry but something went wrong.</h1>
                </div>
            }     
        </div>
    )
};

export default Payment;