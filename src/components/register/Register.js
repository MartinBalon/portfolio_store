import React from 'react';

const Register = () => {
    return (
        <div className="container">
              <form id="register">
                <label htmlFor="first_name">First name:</label>
                <input type="text" name="first_name" id="first_name" />
                <br />
                <label htmlFor="last_name">Last name:</label>
                <input type="text" name="last_name" id="last_name" />
                <br />
                <label htmlFor="register_email">Email:</label>
                <input type="text" name="register_email" id="register_email" />
                <br />
                <label htmlFor="register_password">Password:</label>
                <input type="password" name="register_password" id="register_password" />
                <br />
                <label htmlFor="register_password_second">Password again:</label>
                <input type="password" name="register_password_second" id="register_password_second" />

                <input type="checkbox" name="show_password" id="show_password" />
                <span>show passwords</span>
                <br /><br />
                <input type="submit" name="register" value="Register" id="register_user" />

                <input type="checkbox" name="agree_tc" id="agree_tc" />
                <span>By registering I agree with terms &amp; conditions</span>
            </form>
        </div>
    )
};

export default Register;