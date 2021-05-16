import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Checkout = ({ changeOrder, customer }) => {
    // scroll to the top of the page
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [firstName, setFirstName] = useState({
        value: customer ? customer.firstName : '', 
        valid: customer ? true : false, 
        reason: ''
    });
    const [lastName, setLastName] = useState({
        value: customer ? customer.lastName : '', 
        valid: customer ? true : false, 
        reason: ''
    });
    const [email, setEmail] = useState({
        value: customer ? customer.email : '', 
        valid: customer ? true : false, 
        reason: ''
    });
    const [secondEmail, setSecondEmail] = useState({
        value: customer ? customer.email : '', 
        valid: customer ? true : false, 
        reason: ''
    });
    const [phone, setPhone] = useState({
        value: customer ? customer.phone : '', 
        valid: customer ? true : false, 
        reason: ''
    });
    const [street, setStreet] = useState({
        value: customer ? customer.street : '', 
        valid: customer ? true : false, 
        reason: ''
    });
    const [town, setTown] = useState({
        value: customer ? customer.town : '', 
        valid: customer ? true : false, 
        reason: ''
    });
    const [postCode, setPostCode] = useState({
        value: customer ? customer.postCode : '', 
        valid: customer ? true : false, 
        reason: ''
    });
    // This function handles changes in input fields and call validate function on each field
    const handleChange = (inputValue, field) => {
        switch (field) {
            case 'firstName':
                setFirstName(validate(inputValue, 'text'));
                break;
            case 'lastName':
                setLastName(validate(inputValue, 'text'));
                break;
            case 'email':
                setEmail(validate(inputValue, 'email'));
                break;
            case 'secondEmail':
                setSecondEmail(validate(inputValue, 'secondEmail'));
                break;
            case 'phone':
                setPhone(validate(inputValue, 'phone'));
                break;
            case 'street':
                setStreet(validate(inputValue, 'numlet'));
                break;
            case 'town':
                setTown(validate(inputValue, 'text'));
                break;
            case 'postCode':
                setPostCode(validate(inputValue, 'number'));
                break;
            default:
                return false;
        }     
    };


    // validate fields based on different criteria
    const validate = (inputValue, type) => {
        const valid = { value: inputValue, valid: true, reason: '' };
        // empty field - universal for all inputs
        if (!inputValue) {
            return {
                value: inputValue, 
                valid: false, 
                reason: 'This field cannot be empty!'
            };
        // text fields
        } else if (type === 'text' && inputValue.length === 1) {
            return {
                value: inputValue, 
                valid: false, 
                reason: 'This field has to be at least 2 characters long!'
            };
        } else if (type === 'text' && inputValue.length > 1) {
            // regex to filter unwanted chars.
            const textRegex = /^[a-zA-ZÀ-ž ]*$/;
            if (textRegex.test(inputValue)) {
                return valid;
            } else {
                return {
                    value: inputValue, 
                    valid: false, 
                    reason: 'Only letters are allowed! No spaces!'
                };
            }
        // email field
        } else if (type === 'email') {
            // regex email - very simple email regex
            const emailRegex = /^.+@.+\..+$/;
            if (emailRegex.test(inputValue)) {
                return valid;
            } else {
                return {
                    value: inputValue, 
                    valid: false, 
                    reason: 'Incorrect email format!'
                };
            }
        } else if (type === 'secondEmail') {
            // there is no need to use regex to check second email again as this is only to check 
            // that first email was correct
            if (inputValue === email.value) {
                return valid;
            } else {
                return {
                    value: inputValue, 
                    valid: false, 
                    reason: 'Emails do not match!'
                };
            }
        } else if (type === 'phone') {
            // regex phone - numbers only with + symbol
            const phoneRegex = /^\+(?:[0-9 ]●?){6,14}[0-9 ]$/;
            if (phoneRegex.test(inputValue)) {
                return valid;
            } else {
                return {
                    value: inputValue, 
                    valid: false, 
                    reason: 'Incorrect phone format - you must include "+420"'
                };
            }
        // numlet -> for street
        } else if (type === 'numlet') {
            // regex letters and numbers only
            const numbersLettersRegex = /^[a-zA-Z0-9À-ž ]*$/;
            if (numbersLettersRegex.test(inputValue)) {
                return valid;
            } else {
                return {
                    value: inputValue, 
                    valid: false, 
                    reason: 'Only letters and numbers are allowed!'
                };
            }
        } else if (type === 'number') {
            const numbersRegex = /^[0-9 ]*$/;
            if (numbersRegex.test(inputValue)) {
                return valid;
            } else {
                return {
                    value: inputValue, 
                    valid: false, 
                    reason: 'Only numbers are allowed!'
                };
            }
        // valid field
        } else {
            return {
                value: inputValue, 
                valid: true, 
                reason: ''
            }
        }
    };

    // this function checks whether everything is valid - if not link to payment page won't work
    const checkIfValid = () => {
        const inputFields = [firstName, lastName, email, secondEmail, phone, street, town, postCode];
        // check all fields whether they are valid
        let valid = [];
        for (let i = 0; i < inputFields.length; i++) {
            if(!inputFields[i].valid) {
                valid.push(false);
            }
        }
        if (valid.length === 0) {         
            return true;
        }
        return false;
    }

    return (
        <div className="container">
            <div className="xs-w-80 m-w-60 l-w-50 xl-w-90 clearfix">
                {
                    !customer ?
                    <div className="xs-m-t-10 m-m-t-5 checkout_left">
                        <h2 className="xs-m-b-2 center">
                            Are you an existing customer?
                        </h2>
                        <Link to="/sign_in">
                            <div className="button xs-w-100px">
                                Sign in
                            </div>
                        </Link>
                        <h2 className="xs-m-b-2 xs-m-t-5 center">
                            If you don't have an account yet you can register to get extra deals.
                        </h2>
                        <Link to="/register">
                            <div className="button xs-w-100px">
                                Register
                            </div>
                        </Link>
                    </div>
                    :
                    <></>
                }
                <div className="xs-m-t-10 checkout_right">
                    {
                        !customer ?
                        <h1 className="xs-m-b-5">Finish checkout as a guest:</h1>
                        :
                        <></>
                    }
                    <div className="xs-m-b-10">
                        <h2 className="xs-m-b-2">Contact details:</h2>
                        <label htmlFor="first_name">First name:</label>
                        <span className="warning_message">{firstName.reason}</span>
                        <input 
                            type="text" 
                            name="first_name" 
                            value={firstName.value || ''}
                            onChange={ (event) => handleChange(event.target.value, 'firstName') } 
                        />
                        <br />
                        <label htmlFor="last_name">Last name:</label>
                        <span className="warning_message">{lastName.reason}</span>
                        <input 
                            type="text" 
                            name="last_name"
                            value={lastName.value || ''}
                            onChange={ (event) => handleChange(event.target.value, 'lastName') } 
                        />
                        <br />
                        <label htmlFor="email">Email:</label>
                        <span className="warning_message">{email.reason}</span>
                        <input 
                            type="text" 
                            name="email"
                            value={email.value || ''}
                            onChange={ (event) => handleChange(event.target.value, 'email') } 
                        />
                        <br />
                        {
                            !customer ?
                            <>
                            <label htmlFor="second_email">Email again:</label>
                            <span className="warning_message">{secondEmail.reason}</span>
                            <input 
                                type="text" 
                                name="second_email"
                                value={secondEmail.value || ''}
                                onChange={ (event) => handleChange(event.target.value, 'secondEmail') } 
                            />
                            <br />
                            </>
                            :
                            <></>
                        }
                        <label htmlFor="phone">Phone:</label>
                        <span className="warning_message">{phone.reason}</span>
                        <input 
                            type="text" 
                            name="phone" 
                            value={phone.value || ''}
                            onChange={ (event) => handleChange(event.target.value, 'phone') } 
                        />
                    </div>
                    <div className="xs-m-b-10">
                        <h2 className="xs-m-b-2">Delivery Address:</h2>
                        <label htmlFor="street">Street &amp; house number:</label>
                        <span className="warning_message">{street.reason}</span>
                        <input 
                            type="text" 
                            name="street"
                            value={street.value || ''}
                            onChange={ (event) => handleChange(event.target.value, 'street') } 
                        />
                        <br />
                        <label htmlFor="town">Town:</label>
                        <span className="warning_message">{town.reason}</span>
                        <input 
                            type="text" 
                            name="town" 
                            value={town.value || ''}
                            onChange={ (event) => handleChange(event.target.value, 'town') } 
                        />
                        <br />
                        <label htmlFor="post_code">Post code:</label>
                        <span className="warning_message">{postCode.reason}</span>
                        <input 
                            type="text" 
                            name="post_code" 
                            value={postCode.value || ''}
                            onChange={ (event) => handleChange(event.target.value, 'postCode') }
                        />        
                    </div>  
                    <div className="xs-m-b-10 m-m-b-5">
                        <p className="center xs-m-b-2">Proceed to payment and complete the order.</p>
                        {
                            checkIfValid() ?
                            <Link 
                                to="/payment"
                                // set order so we can access it later on in different components
                                onClick={ () => {
                                    changeOrder({
                                        firstName: firstName.value, 
                                        lastName: lastName.value,
                                        email: email.value,
                                        phone: phone.value,
                                        street: street.value,
                                        town: town.value, 
                                        postCode: postCode.value
                                    });
                                }}
                            >
                                <div className="button xs-w-100px">
                                    Payment
                                </div>
                            </Link>
                            :
                            <div className="button xs-w-100px">
                                Payment
                            </div>
                        }
                    </div> 
                </div>
            </div>
        </div>
    )
};

export default Checkout;