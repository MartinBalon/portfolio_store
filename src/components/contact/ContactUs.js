import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import validate from '../../utils/validate';

const ContactUs = () => {
    const [name, setName] = useState({ value: '', valid: false, reason: '' });
    const [email, setEmail] = useState({ value: '', valid: false, reason: '' });
    const [message, setMessage] = useState({ value: '', valid: false, reason: '' });

    // scroll to top of the page 
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const valid = { value: value, valid: true, reason: '' };

        if (field === 'name') {
            if (!value) {
                setName({ value: value, valid: false, reason: ' This field cannot be empty!' });
            } else if (!validate.text(value)) {
                setName({ value: value, valid: false, reason: ' Only letters are allowed!' });
            } else {
                setName(valid);
            }
        } else if (field === 'email') {
            if (!value) {
                setEmail({ value: value, valid: false, reason: ' This field cannot be empty!' });
            } else if (!validate.email(value)) {
                setEmail({ value: value, valid: false, reason: ' Wrong email format!' });
            } else {
                setEmail(valid);
            }
        } else {
            if (!value) {
                setMessage({ value: value, valid: false, reason: ' Message cannot be empty!' });
            } else {
                setMessage(valid);
            }
        }
    };

    return (
        <div className="container">
            <div className="clearfix xs-w-80 xs-m-t-10">
                <div className="xs-m-b-5">
                    <h2 className="bold">Head Office:</h2>
                    <p>Teplicka 1a</p>
                    <p>Prague</p>
                    <p>190 00</p>
                    <p>The Czech Republic</p>
                    <p>+420 123 456 789</p>
                    <p>noinfo@aluminiumpixels.com</p>
                </div>
                <div className="xs-m-b-5">
                    <h2 className="bold">Factory:</h2>
                    <p>Prazska 1b</p>
                    <p>Teplice</p>
                    <p>415 01</p>
                    <p>The Czech Republic</p>
                    <p>+420 987 654 321</p>
                    <p>noinfo@aluminiumpixels.com</p>
                </div>
            </div>
            <div className="xs-w-80 xs-m-t-10">
                <h1>Leave us a message:</h1>
                <br />
                <label htmlFor="name">
                    First and last name:
                    <span className="warning">{ name.reason }</span>
                </label>
                <input 
                    type="text" 
                    name="name"
                    value={ name.value }
                    onChange={ (event) => handleChange(event) } 
                />
                <br />
                <label htmlFor="email">
                    Email:
                    <span className="warning">{ email.reason }</span>
                </label>
                <input 
                    type="text" 
                    name="email"
                    value={ email.value }
                    onChange={ (event) => handleChange(event) }  
                />
                <br />
                <label htmlFor="message">
                    Message:
                    <span className="warning">{ message.reason }</span>
                </label>
                <textarea 
                    name="message" 
                    rows="10"
                    value={ message.value }
                    onChange={ (event) => handleChange(event) }
                >
                </textarea>

                <br /><br />

                <div className="xs-m-b-10">
                    {
                        name.valid && email.valid && message.valid ?
                        <Link to={{
                            pathname: '/send_message',
                            data: {
                                name: name.value,
                                email: email.value,
                                message: message.value
                            }
                        }}
                        >
                            <div className="form_button">
                                Send message
                            </div>
                        </Link>
                        :
                        <div className="form_button">
                            Send message
                        </div>
                    }
                </div>
            </div>
        </div>
    )
};

export default ContactUs;