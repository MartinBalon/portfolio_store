import React from 'react';

const SignIn = () => {
    return (
        <div className="container">
            <form id="sign_in">
                <label htmlFor="email">Email:</label>
                <input type="text" name="email" id="email" />
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" />

                <input type="checkbox" name="show_password" id="show_password" />
                <span>show password</span>
                <br /><br />
                <input type="submit" name="login" value="Log In" id="login" />

                <input type="checkbox" name="remember_me" id="remember_me" />
                <span>remember me</span>
            </form>
        </div>
    )
};

export default SignIn;