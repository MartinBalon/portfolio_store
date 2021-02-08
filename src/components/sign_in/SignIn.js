import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = ({ changeLoginData }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    // scroll to top of the page 
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container">
            <form id="sign_in">
                <label htmlFor="email">Email:</label>
                <input 
                    type="text" 
                    name="email"
                    value={ email || ''}
                    onChange={ event => setEmail(event.target.value) } 
                />
                <br />
                <label htmlFor="password">Password:</label>
                <input 
                    type={ showPassword ? 'text' : 'password' }
                    name="password"
                    value={ password || '' }
                    onChange={ event => setPassword(event.target.value) } 
                />

                <input 
                    type="checkbox" 
                    name="show_password"
                    onClick={ () => showPassword ? setShowPassword(false) : setShowPassword(true) }  
                />
                <span>show password</span>
                <br /><br />

                {
                    email && password ?
                    <Link 
                        to='/sign_in_confirmation' 
                        onClick={ () => {
                            changeLoginData({
                                email: email,
                                password: password,
                                rememberMe: rememberMe
                            });
                        }} 
                        style={{ color: 'white' }} 
                    >
                        <div className="form_button">
                            Log In
                        </div>
                    </Link>
                    :
                    <div className="form_button">
                        Log In
                    </div>
                }   

                <input 
                    type="checkbox" 
                    name="remember_me"
                    onClick={ () => rememberMe ? setRememberMe(false) : setRememberMe(true) } 
                />
                <span>remember me</span>
            </form>
        </div>
    )
};

export default SignIn;