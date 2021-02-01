import React, { useState } from 'react';
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
import ItemDetail from './components/common/ItemDetail';
import Checkout from './components/checkout/Checkout';
import Payment from './components/payment/Payment';
import OrderConfirmation from './components/checkout/OrderConfirmation';
import RegisterConfirmation from './components/register/RegisterConfirmation';

const App = () => {
    // hooks to change total price and quantity in shopping cart so we can pass them to header
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalProducts, setTotalProducts] = useState(0);
    const [order, setOrder] = useState();
    const changePrice = price => setTotalPrice(price);
    const changeProducts = product => setTotalProducts(product);
    const changeOrder = order => setOrder(order);
    
    return(
        <BrowserRouter>
            <Header totalPrice={totalPrice} totalAmount={totalProducts} />
            <Switch>
                <Route path="/about_us" component={AboutUs} exact />
                <Route path='/artists' component={Artists} exact />
                <Route 
                    path='/shopping_cart'
                    render={ () => 
                        <ShoppingCart changePrice={changePrice} changeProducts={changeProducts}/>
                    }
                    exact 
                />
                <Route 
                    path='/checkout'
                    render={ () => <Checkout changeOrder={changeOrder} /> }
                    exact 
                />
                <Route 
                    path='/payment'
                    render={ () => <Payment changeOrder={changeOrder} order={order} /> }
                    exact 
                />
                <Route 
                    path='/order_confirmation'
                    render={ () => 
                        <OrderConfirmation 
                            order={order}
                            changePrice={changePrice} 
                            changeProducts={changeProducts} 
                        />
                    }
                    exact 
                />
                <Route path='/shop' component={Store} exact />
                <Route path='/product/:id' component={ItemDetail} exact />
                <Route path='/contact_us' component={ContactUs} exact /> 
                <Route path='/sign_in' component={SignIn} exact />
                <Route path='/register' component={Register} exact />
                <Route path='/register_confirmation' component={RegisterConfirmation} exact />
                <Route path='/home' component={Home} exact />
                <Route path='/' component={Home} exact />
                {/* error page later */}
            </Switch>
            <Footer />
        </BrowserRouter>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));