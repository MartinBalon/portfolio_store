import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Components
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
import ItemDetail from './components/common/ItemDetail';
import Checkout from './components/checkout/Checkout';
import Payment from './components/payment/Payment';
import OrderConfirmation from './components/checkout/OrderConfirmation';
import RegisterConfirmation from './components/register/RegisterConfirmation';
import SignInConfirmaiton from './components/sign_in/SignInConfirmation';
import EmailValidation from './components/register/EmailValidation';
import Admin from './components/admin/Admin';
import UpdateDetails from './components/admin/UpdateDetails';
import UpdatePassword from './components/admin/UpdatePassword';
import Logout from './components/admin/Logout';
import SendMessage from './components/contact/SendMessage';
import DeleteAccount from './components/admin/DeleteAccount';

const App = () => {
    // hooks to change 'global' state
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalProducts, setTotalProducts] = useState(0);
    const [order, setOrder] = useState();
    const [customer, setCustomer] = useState();
    const [loginData, setLoginData] = useState();

    const changePrice = price => setTotalPrice(price);
    const changeProducts = product => setTotalProducts(product);
    const changeOrder = order => setOrder(order);
    const changeCustomer = customer => setCustomer(customer);
    const changeLoginData = loginData => setLoginData(loginData);
    
    return(
        <BrowserRouter>
            <Header 
                totalPrice={ totalPrice } 
                totalAmount={ totalProducts } 
                customer={ customer } 
            />
            <Switch>
                <Route path="/about_us" component={ AboutUs } />
                <Route path='/artists' component={ Artists } />
                <Route path='/shop' component={ Store } />
                <Route path='/product/:id' component={ ItemDetail } />
                <Route path='/contact_us' component={ ContactUs } />
                <Route path='/register' component={ Register } exact />
                <Route path='/register_confirmation' component={ RegisterConfirmation } />
                <Route path='/validate_email/:code' component={ EmailValidation } />
                <Route path='/update_password' component={ UpdatePassword } />
                <Route path='/send_message' component={ SendMessage } />
                <Route 
                    path='/delete_account'
                    render={ () => 
                        <DeleteAccount 
                            changeCustomer={ changeCustomer } 
                            loginData={ loginData }
                            changeLoginData={ changeLoginData } 
                        /> 
                    } 
                />
                <Route 
                    path='/shopping_cart'
                    render={ () => 
                        <ShoppingCart 
                            changePrice={ changePrice } 
                            changeProducts={ changeProducts }
                        />
                    }
                />
                <Route 
                    path='/checkout'
                    render={ () => <Checkout changeOrder={ changeOrder } customer={ customer } /> }
                />
                <Route 
                    path='/payment'
                    render={ () => <Payment changeOrder={ changeOrder } order={ order } /> } 
                />
                <Route 
                    path='/order_confirmation'
                    render={ () => 
                        <OrderConfirmation 
                            order={ order }
                            changePrice={ changePrice } 
                            changeProducts={ changeProducts }
                            changeOrder={ changeOrder } 
                        />
                    } 
                />
                <Route 
                    path='/sign_in'
                    render={ () => <SignIn changeLoginData={ changeLoginData } /> } 
                />
                <Route 
                    path='/sign_in_confirmation'
                    render={ () => 
                        <SignInConfirmaiton 
                            loginData={ loginData }
                            changeLoginData={ changeLoginData } 
                            changeCustomer={ changeCustomer } 
                        /> 
                    }
                />
                <Route 
                    path='/my_account'
                    render={ () => 
                        <Admin 
                            customer={ customer } 
                            changeCustomer={ changeCustomer }
                            changeLoginData={ changeLoginData } 
                        /> 
                    }
                />
                <Route 
                    path='/update_details'
                    render={ () => 
                        <UpdateDetails customer={ customer } changeCustomer={ changeCustomer } /> 
                    }
                />
                <Route 
                    path='/log_out'
                    render={ () => 
                        <Logout 
                            changeCustomer={ changeCustomer }
                            changeLoginData={ changeLoginData }
                        />
                    }
                />
                <Route path='/home' component={ Home } />
                <Route path='/' component={ Home } exact />
                {/* error page later */}
            </Switch>
            <Footer />
        </BrowserRouter>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));