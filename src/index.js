import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from  './components/footer/Footer';

const App = () => {
    return(
        <div id="container">
            <Header />
            <Home />
            <Footer />
        </div>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));