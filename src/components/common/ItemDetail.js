import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const ItemDetail = () => {
    // get product id from url param - we use parameter so customer can save or send a link to his friends
    let { id } = useParams();
    // scroll to the top of the page
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    // buying options hooks
    const [size, setSize] = useState();
    const [thickness, setThickness] = useState();
    const [finish, setFinish] = useState()
    const [price, setPrice] = useState({ size: 0, thickness: 0, finish: 0});
    // products
    const [products, setProducts] = useState();
    // product
    let product;
    let imgPath;
    let imgAlt;
    // product style hooks
    const [maxWidth, setMaxWidth] = useState('50%');
    const [maxHeight, setMaxHeight] = useState('20%');
    const [boxShadow, setBoxShadow] = useState('2px 2px 5px rgb(100, 100, 100)');
    // round total price to two decimal places only
    let totalPrice = 0;
    totalPrice = Number(Math.round(price.size + price.thickness + price.finish +'e'+ 2) +'e-'+ 2).toFixed(2);
    // get all the records and save only matching id = we use DB later on to do this
    useEffect(() => {
        axios.get('/api/data').then( response => { 
            setProducts(response.data.items);
        });
    }, []);
    // loop through products to pick the one we need
    if (products) {
        products.map((singleProduct) => {
            if (singleProduct.id === parseInt(id)) {
                product = singleProduct;
                imgPath = `/img/items/${product.img}.jpg`;
                imgAlt = `Image by ${product.author}`;
            }
            return false;
        }); 
    }

    const addOption = (option, value, price) => {
        if (option === 'size') {
            setSize(value);
            setPrice(prevState => ({
                ...prevState,
                size : price
            }));
            // increase the size of image
            if (value === '60 x 40' || value === '40 x 65') {
                setMaxWidth('50%');
                setMaxHeight('20%');
            } else if (value === '80 x 60' || value === '50 x 75') {
                setMaxWidth('60%');
                setMaxHeight('25%');
            } else if (value === '100 x 75' || value === '60 x 90') {
                setMaxWidth('70%');
                setMaxHeight('30%');
            } else {
                setMaxWidth('80%');
                setMaxHeight('35%'); 
            }
        } else if (option === 'thickness') {
            setThickness(value);
            setPrice(prevState => ({
                ...prevState,
                thickness : price
            }));
            // increase the shadow
            if (value === 12) {
                setBoxShadow('2px 2px 5px rgb(100, 100, 100)');
            } else if (value === 18) {
                setBoxShadow('3px 3px 5px rgb(100, 100, 100)');
            } else {
                setBoxShadow('5px 5px 5px rgb(100, 100, 100)');
            }
        } else {
            setFinish(value);
            setPrice(prevState => ({
                ...prevState,
                finish : price
            }));
        }
    };

    const createInput = () => {
        let radios = [];
        let id = 1;
        for (let i = 0; i < 4; i++) {
            let size = product.sizes[i];
            let price = product.pricing[i];
            let dots;
            size.length === 8 ? dots = '...' : dots = '....';
            radios.push(
                <div key={id} >
                    <input
                        type="radio" 
                        name="product_size" 
                        onChange={ () => addOption('size', size, price) }
                    /> {size} {dots} ${price}<br/ >
                </div>
            );
            id++;
        }
        return radios;
    };

    const addToCart = () => {
        const productObj = {
            id: id,
            name : product.name,
            author: product.author,
            image: imgPath,
            alt: imgAlt,
            size: size,
            thickness: thickness,
            finish: finish,
            price: totalPrice,
            quantity: 1
        }
        localStorage.setItem(productObj.id, JSON.stringify(productObj));
    };

    return (
        <div className="container">
            <div className="item_container">
                <div className="item_background">
                    <img 
                        src={imgPath} 
                        alt={imgAlt} 
                        className="productImage" 
                        style={{
                            maxWidth : maxWidth,
                            maxHeight: maxHeight,
                            boxShadow: boxShadow,
                            WebkitBoxShadow: boxShadow,
                            MozBoxShadow: boxShadow
                        }} 
                    />    
                </div>
                <div id="buying_options" className="clearfix">
                    <div className="clearfix">
                        <div className="buying_option">
                            <h2>Select Size(cm):</h2>
                            { product ?
                                createInput()
                                :
                                false
                            }
                        </div>
                        <div className="buying_option">
                            <h2>Select Thickness:</h2>
                            <input 
                                type="radio" 
                                name="product_thickness"
                                onChange={ () => addOption('thickness', 12, 0) }  
                            /> 12mm .... + $0.00 <br/ >
                            <input 
                                type="radio" 
                                name="product_thickness"
                                onChange={ () => addOption('thickness', 18, 9.99) }  
                            /> 18mm .... + $9.99 <br/ >
                            <input 
                                type="radio" 
                                name="product_thickness"
                                onChange={ () => addOption('thickness', 24, 17.99) }  
                            /> 24mm ... + $17.99 <br/ >
                        </div>
                    </div>
                    <div className="buying_option">
                        <h2>Select Finish:</h2>
                        <input 
                            type="radio" 
                            name="product_finish"
                            onChange={ () => addOption('finish', 'glossy', 0) } 
                        /> glossy ....... + $0.00 <br/ >
                        <input 
                            type="radio" 
                            name="product_finish"
                            onChange={ () => addOption('finish', 'matte', 0) }  
                        /> matte ....... + $0.00 <br/ >
                        <input 
                            type="radio" 
                            name="product_finish"
                            onChange={ () => addOption('finish', 'satin', 4.99) } 
                        /> satin .......... + $4.99 <br/ >
                        <input 
                            type="radio" 
                            name="product_finish"
                            onChange={ () => addOption('finish', 'metallic', 4.99) } 
                        /> metallic ... + $4.99 <br/ >
                    </div>
                    <div className="buying_option add_to_cart">
                        <p>Total price:</p>
                        <h2>${totalPrice}</h2>
                        <div className="button" onClick={ addToCart }>
                            {
                            !size || !thickness || !finish ?
                            'select size, thickness and finish'
                            :
                            <Link to="/shopping_cart" className="button">ADD TO CART</Link> 
                            }
                        </div>
                    </div>                          
                </div>
            </div>
        </div>
    )
};

export default ItemDetail;