import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ShoppingCart = ({ changePrice, changeProducts }) => {
    // scroll to the top of the page
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    // get all the products from local storage and convert them to array
    const [localStorageData, setLocalStorageData] = useState(Object.entries(localStorage));
    const [products, setProducts] = useState([]);
    let subtotal = 0;
    let shipment = 0;
    let shipmentQuantity = 0;
    let totalPrice = 0;
    // this will render once and after each update of localStorageData
    useEffect(() => {
        let products = [];
        // loop through products saved from local storage
        for (let i = 0; i < localStorageData.length; i++) {
            // all products in local storage have key as number - product ID
            // we need to seperate totalPrice etc from product so we won't get NaN error
            if (!isNaN(localStorageData[i][0])) {
                // first item in array is productId and second is string which contains JSON object
                let productDetail = JSON.parse(localStorageData[i][1]);
                // create a product
                let product = {
                    id: localStorageData[i][0],
                    name: productDetail.name,
                    author: productDetail.author,
                    imgURL: productDetail.image,
                    imgALT: productDetail.alt,
                    size: productDetail.size,
                    thickness: productDetail.thickness,
                    finish: productDetail.finish,
                    quantity: productDetail.quantity,
                    price: parseFloat(productDetail.price)
                };
                products.push(product);             
            }
        }
        setProducts(products);
    }, [localStorageData]);

    // calculate shipment price, total price and set total price to local storage
    for (let i = 0; i < products.length; i++) {
        subtotal += products[i].price * products[i].quantity;
        shipmentQuantity += products[i].quantity;
    }
    shipment = shipmentQuantity <= 1 ? 4.99 * shipmentQuantity : 4.99 + ((shipmentQuantity - 1) * 1.99);
    // totalPrice = subtotal + shipment;
    totalPrice = Number((subtotal + shipment).toFixed(2));
    localStorage.setItem('totalPrice', totalPrice);
    // save total amount to local storage so we can show total amount of products in header 
    // even after closing the browser
    localStorage.setItem('amount', shipmentQuantity);

    // to lift state up - updating state in index.js with total price 
    // so we can see price being updated in navbar as well
    // we have to use 4 dependencies in order to get rid of the warning
    useEffect(() => {
        changePrice(totalPrice);
        changeProducts(shipmentQuantity);
    }, [changePrice, totalPrice, shipmentQuantity, changeProducts])
    
    const deleteProduct = (id) => {
        // update localStorageData state so we can re-render the shopping cart
        let productsArray = [];
        for (let i = 0; i < localStorageData.length; i++) {
            if (localStorageData[i][0] !== id) {
                productsArray.push(localStorageData[i])
            }
        }
        setLocalStorageData(productsArray);
        // delete selected product from the local storage
        localStorage.removeItem(id);        
    };

    const updateQuantity = (id, mathOp) => {
        for (let i = 0; i < localStorageData.length; i++) {
            if (localStorageData[i][0] === id) {
                let product = JSON.parse(localStorageData[i][1])
                if (mathOp === '-' && product.quantity > 1) {
                    product.quantity--;
                } else if (mathOp === '+') {
                   product.quantity++;
                }
                // update local storage
                localStorage.setItem(id, JSON.stringify(product));
            }
        }
        // update localStorageData state so we can re-render the shopping cart
        setLocalStorageData(Object.entries(localStorage));
    };
    
    return (
        <div className="container">
            <div className="sc_wrapper">
                <div className="clearfix sc-inner">
                    { products.length > 0 ?
                    products.map((product) => (
                        <div className="sc_product sc_container clearfix" key={product.id}>
                            <div className="clearfix sc_name">
                                <div className="left">
                                    <h2>{product.name}</h2>
                                    <p>by {product.author}</p>
                                </div>
                                <div className="right" onClick={() => {
                                    deleteProduct(product.id);
                                }}>
                                    <img src="img/logo/delete.svg" alt="delete logo" />
                                    Delete
                                </div> 
                            </div>
                            <div className="sc_image">
                                <img src={product.imgURL} alt={product.imgALT} />
                            </div>
                            <div className="sc_detail">
                                <h2>Product detail:</h2>
                                <p>{product.size}cm, {product.thickness}mm, {product.finish}</p>
                                <h2>Price:</h2>
                                <p>${product.price}</p>
                                <div className="sc_quantity clearfix">
                                    <div 
                                        className="left" 
                                        onClick={() => { updateQuantity(product.id, '-') }}
                                    >-</div>
                                    <div className="middle">{product.quantity}</div>
                                    <div 
                                        className="left"
                                        onClick={() => { updateQuantity(product.id, '+') }}
                                    >+</div>
                                </div>
                            </div>
                        </div>
                    ))
                    :
                    <div className="sc_container sc_empty">
                        <h2>Your shopping cart is empty</h2>
                    </div> }
                    
                    <div className="sc_container sc_summary">
                        <div className="sc_price">
                            <div className="clearfix">
                                <h4 className="left">Subtotal:</h4>
                                <h3 className="right">${ subtotal ? subtotal.toFixed(2) : '0.00' }</h3>
                            </div>
                            <div className="clearfix">
                                <h4 className="left">Shipment:</h4>
                                <h3 className="right">${ shipment.toFixed(2) }</h3>
                            </div>
                            <div className="clearfix">
                                <h2 className="left">Total:</h2>
                                <h3 className="right">${ totalPrice.toFixed(2) }</h3>
                            </div>
                        </div>

                        <div className="sc_checkout">
                            <div className="sc_checkout_container clearfix">
                                <div className="left">
                                    <Link to="/shop">Continue shopping</Link>
                                </div>
                                <div className="right">
                                    {
                                        products.length < 1 ?
                                        'Checkout'
                                        :
                                        <Link to="/checkout" style={{color: 'white'}}>Checkout</Link>
                                    }
                                </div> 
                            </div>
                        </div>
                    </div>
                   
                </div>                

                {/* <div className="sc_container sc_price">
                    <div className="clearfix">
                        <h4 className="left">Subtotal:</h4>
                        <h3 className="right">${ subtotal ? subtotal.toFixed(2) : '0.00' }</h3>
                    </div>
                    <div className="clearfix">
                        <h4 className="left">Shipment:</h4>
                        <h3 className="right">${ shipment.toFixed(2) }</h3>
                    </div>
                    <div className="clearfix">
                        <h2 className="left">Total:</h2>
                        <h3 className="right">${ totalPrice.toFixed(2) }</h3>
                    </div>
                </div>

                <div className="sc_container sc_checkout">
                    <div className="sc_checkout_container clearfix">
                        <div className="left">
                            <Link to="/shop">Continue shopping</Link>
                        </div>
                        <div className="right">
                            {
                                products.length < 1 ?
                                'Checkout'
                                :
                                <Link to="/checkout" style={{color: 'white'}}>Checkout</Link>
                            }
                        </div> 
                    </div>
                </div> */}

            </div>
        </div>
    )
};

export default ShoppingCart;