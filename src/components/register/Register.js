import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    // scroll to top of the page 
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [firstName, setFirstName] = useState({value: '', valid: false, reason: ''});
    const [lastName, setLastName] = useState({value: '', valid: false, reason: ''});
    const [email, setEmail] = useState({value: '', valid: false, reason: ''});
    const [password, setPassword] = useState({value: '', valid: false, reason: ''});
    const [confirmPassword, setConfirmPassword] = useState({value: '', valid: false, reason: ''});
    const [showPasswords, setShowPasswords] = useState(false);
    const [agree, setAgree] = useState(false);
    
    const handleChange = (value, field) => {
        if (field === 'firstName') {
            setFirstName(validateInput(value, 'text'));
        } else if (field === 'lastName') {
            setLastName(validateInput(value, 'text'));
        } else if (field === 'email') {
            setEmail(validateInput(value, 'email'));
        } else if (field === 'password') {
            setPassword(validateInput(value, 'password'));
        } else {
            setConfirmPassword(validateInput(value, 'confirmPassword'));
        }
    };

    const validateInput = (inputValue, type) => {
        const valid = {value: inputValue, valid: true, reason: ''};
        // empty field - universal for all inputs
        if (!inputValue) {
            return {
                value: inputValue, 
                valid: false, 
                reason: 'This field cannot be empty!'
            };
        // text one character
        } else if (type === 'text' && inputValue.length === 1) {
            return {
                value: inputValue, 
                valid: false, 
                reason: 'This field has to be at least 2 characters long!'
            };
        // text - check whether letters only
        } else if (type === 'text' && inputValue.length > 1) {
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
        } else if (type === 'password') {
            const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%&*])[a-zA-Z0-9!@#$%&*]{7,15}$/;
            // check password length
            if (inputValue.length < 8 || inputValue.length > 16) {
                return {
                    value: inputValue, 
                    valid: false, 
                    reason: 'Your password must be 8 - 16 characters long!'
                };
            } else if (!passwordRegex.test(inputValue)) {
                return {
                    value: inputValue, 
                    valid: false, 
                    reason: `Your password must include at least one number, 
                    combination of upper and lower case letters and at least one 
                    of the following special characters: !@#$%&*`
                };
            } else {
                return valid;
            }
        } else if (type === 'confirmPassword') {
            if (password.value !== inputValue) {
                return {
                    value: inputValue, 
                    valid: false, 
                    reason: 'Your passwords don\'t match!'
                };
            } else {
                return valid;
            }
        } else {
            return valid;
        }
    };
    
    const checkIfValid = () => {
        const inputFields = [firstName, lastName, email, password];
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
            <div className="xs-w-80 xs-m-t-10 xs-m-b-10">
                <label htmlFor="first_name">First name:</label>
                <span className="warning_message">{firstName.reason}</span>
                <input 
                    type="text" 
                    name="first_name" 
                    value={firstName.value}
                    onChange={(event) => handleChange(event.target.value, 'firstName')}
                />
                <br />
                <label htmlFor="last_name">Last name:</label>
                <span className="warning_message">{lastName.reason}</span>
                <input 
                    type="text" 
                    name="last_name"
                    value={lastName.value}
                    onChange={(event) => handleChange(event.target.value, 'lastName')}
                />
                <br />
                <label htmlFor="register_email">Email:</label>
                <span className="warning_message">{email.reason}</span>
                <input 
                    type="text" 
                    name="register_email"
                    value={email.value}
                    onChange={(event) => handleChange(event.target.value, 'email')} 
                />
                <br />
                <label htmlFor="register_password">Password:</label>
                <span className="warning_message">{password.reason}</span>
                <input 
                    type={ showPasswords ? "text" : "password" }
                    name="register_password"
                    value={password.value}
                    onChange={(event) => handleChange(event.target.value, 'password')}  
                />
                <br />
                <label htmlFor="register_password_second">Password again:</label>
                <span className="warning_message">{confirmPassword.reason}</span>
                <input 
                    type={ showPasswords ? "text" : "password" } 
                    name="register_password_second"
                    value={confirmPassword.value}
                    onChange={(event) => handleChange(event.target.value, 'confirmPassword')} 
                />
                <input 
                    type="checkbox" 
                    name="show_password"
                    onChange={() => showPasswords ? setShowPasswords(false) : setShowPasswords(true)} 
                />
                <span>show passwords</span>
                
                <br /><br />              
                {
                    agree && checkIfValid() ?
                    <Link 
                        to={{
                            pathname: '/register_confirmation',
                            userdata: {
                                firstName: firstName.value,
                                lastName: lastName.value,
                                email: email.value,
                                password: password.value
                            }
                        }}
                        style={{ color: 'white' }} 
                    >
                        <div className="form_button">
                            Register
                        </div>
                    </Link>
                    :
                    <div className="form_button">
                        Register
                    </div>
                }
               
                <input 
                    type="checkbox" 
                    name="agree_tc"
                    onChange={ () => agree ? setAgree(false) : setAgree(true) } 
                />
                <span>By registering I agree with terms &amp; conditions</span>

                <br /><br />

                <span className="warning"> 
                    &#42; Even though this is only mock website the information you have provided
                    is going to be saved in our database so you can log in later on. You can always
                    delete your account which will wipe all the data from our database. Please use
                    a password which you don't use enywhere else (password will be encrypted).
                </span>
            </div>
        </div>
    )
};

export default Register;