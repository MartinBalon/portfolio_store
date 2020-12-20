import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from  './components/footer/Footer';

import Home from './components/home/Home';
import Store from './components/store/Store';
import SignIn from './components/sign_in/SignIn';
import Register from './components/register/Register';
import ContactUs from './components/contact/ContactUs';
import ShoppingCart from './components/shopping_cart/ShoppingCart';
import Artists from './components/artists/Artists';
import AboutUs from './components/about_us/AboutUs';

const App = () => {
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/about_us" component={AboutUs} exact />
                <Route path='/artists' component={Artists} exact />
                <Route path='/shopping_cart' component={ShoppingCart} exact />
                <Route path='/shop' component={Store} exact />
                <Route path='/contact_us' component={ContactUs} exact />
                
                <Route path='/sign_in' component={SignIn} exact />
                <Route path='/register' component={Register} exact />

                <Route path='/home' component={Home} exact />
                <Route path='/' component={Home} exact />
                {/* error page later */}
            </Switch>
            <Footer />
        </BrowserRouter>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));