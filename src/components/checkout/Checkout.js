import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
    // scroll to the top of the page
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [firstName, setFirstName] = useState({value: '', valid: false, reason: ''});
    const [lastName, setLastName] = useState({value: '', valid: false, reason: ''});
    const [email, setEmail] = useState({value: '', valid: false, reason: ''});
    const [secondEmail, setSecondEmail] = useState({value: '', valid: false, reason: ''});
    const [phone, setPhone] = useState({value: '', valid: false, reason: ''});
    const [street, setStreet] = useState({value: '', valid: false, reason: ''});
    const [town, setTown] = useState({value: '', valid: false, reason: ''});
    const [postCode, setPostCode] = useState({value: '', valid: false, reason: ''});
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
                setPostCode(validate(inputValue, 'numlet'));
                break;
            default:
                return false;
        }     
    };
    // validate fields based on different criteria
    const validate = (inputValue, type) => {
        const valid = {value: inputValue, valid: true, reason: ''};
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
            const textRegex = /^[a-zA-ZÀ-ž]*$/;
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
        // numlet -> for street and post code
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
            <div className="checkout_container">
                <h2>Are you an existing customer?</h2>
                <div className="button">
                    <Link to="/sign_in" style={{color: 'white'}}>Sing in</Link>
                </div>
                <h2>If you don't have an account yet you can register to get extra deals.</h2>
                <div className="button">
                    <Link to="/register" style={{color: 'white'}}>Register</Link>
                </div>
            </div>
            <div className="checkout_container">
                <h1>Finish checkout as a guest:</h1>
                <div>
                    <h3>Contact details:</h3>
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
                    <label htmlFor="second_email">Email again:</label>
                    <span className="warning_message">{secondEmail.reason}</span>
                    <input 
                        type="text" 
                        name="second_email"
                        value={secondEmail.value || ''}
                        onChange={ (event) => handleChange(event.target.value, 'secondEmail') } 
                    />
                    <br />
                    <label htmlFor="phone">Phone:</label>
                    <span className="warning_message">{phone.reason}</span>
                    <input 
                        type="text" 
                        name="phone" 
                        value={phone.value || ''}
                        onChange={ (event) => handleChange(event.target.value, 'phone') } 
                    />
                </div>
                <div>
                    <h3>Delivery Address:</h3>
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
                <div>
                    Proceed to payment and complete the order.
                    <div className="button">
                        {
                            checkIfValid() ?
                            <Link 
                                to={{
                                    pathname: "/payment",
                                    customer: {
                                        firstName: firstName.value,
                                        lastName: lastName.value,
                                        email: email.value,
                                        phone: phone.value,
                                        street: street.value,
                                        town: town.value,
                                        postCode: postCode.value
                                    }
                                }} 
                                style={{color: 'white'}}
                            >
                                Payment
                            </Link>
                            :
                            'Payment'
                        }
                    </div>
                </div> 
            </div>
        </div>
    )
};

export default Checkout;