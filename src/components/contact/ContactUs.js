import React from 'react';

const ContactUs = () => {
    return (
        <div className="container contact_us">
            <div className="clearfix inner_container">
                <div>
                    <h2>Head Office:</h2>
                    <p>Teplicka 1a</p>
                    <p>Prague</p>
                    <p>190 00</p>
                    <p>The Czech Republic</p>
                    <p>+420 123 456 789</p>
                    <p>noinfo@aluminiumpixels.com</p>
                </div>
                <div>
                    <h2>Factory:</h2>
                    <p>Prazska 1b</p>
                    <p>Teplice</p>
                    <p>415 01</p>
                    <p>The Czech Republic</p>
                    <p>+420 987 654 321</p>
                    <p>noinfo@aluminiumpixels.com</p>
                </div>
            </div>
            <form id="contact_us">
                <h1>Leave us a message:</h1>
                <br />
                <label htmlFor="first_name">First and last name:</label>
                <input type="text" name="first_name" id="first_name" />
                <br />
                <label htmlFor="register_email">Email:</label>
                <input type="text" name="register_email" id="register_email" />
                <br />
                <label htmlFor="message">Message:</label>
                <textarea name="message" id="message" rows="10"></textarea>
                <br /><br />
                <input type="submit" name="send_message" value="Send message" id="send_message" />
            </form>
        </div>
    )
};

export default ContactUs;