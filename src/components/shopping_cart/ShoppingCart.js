import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
    // scroll to the top of the page
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    // get all the products from local storage and convert them to array
    let localStorageData = Object.entries(localStorage);
    let products = [];
    let subtotal = 0;
    let shipment = 4.99;
    let totalPrice = 0;
    // loop through products saved from local storage
    for (let i = 0; i < localStorageData.length; i++) {
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
            price: parseInt(productDetail.price)
        };
        products.push(product);
        subtotal += product.price;
    }

    shipment = products.length > 1 ? 4.99 + ((products.length - 1) * 1.99) : 4.99;
    totalPrice = subtotal + shipment;

    return (
        <div className="container">
            {
                products.length > 0 ?
                products.map((product) => (
                    <div className="sc_product sc_container clearfix" key={product.id}>
                        <div className="clearfix sc_name">
                            <div className="left">
                                <h2>{product.name}</h2>
                                <p>by {product.author}</p>
                            </div>
                            <div className="right">
                                {/* <img src="img/logo/delete.svg" alt="delete logo" /> */}
                                <h2>X</h2>
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
                                <div className="left">-</div>
                                <div className="middle">{product.quantity}</div>
                                <div className="left">+</div>
                            </div>
                        </div>
                    </div>
                ))
                :
                <div className="sc_container sc_empty">
                    <h2>Your shopping cart is empty</h2>
                </div>
            }
            <div className="sc_container sc_price">
                <div className="clearfix">
                    <h4 className="left">Subtotal:</h4>
                    <h3 className="right">${ subtotal ? subtotal : 0.00 }</h3>
                </div>
                <div className="clearfix">
                    <h4 className="left">Shipment:</h4>
                    <h3 className="right">${ shipment }</h3>
                </div>
                <div className="clearfix">
                    <h2 className="left">Total:</h2>
                    <h3 className="right">${ totalPrice }</h3>
                </div>
            </div>
            <div className="sc_container sc_checkout">
                <div className="sc_checkout_container clearfix">
                    <div className="left">
                        <Link to="/shop">Continue shopping</Link>
                    </div>
                    <div className="right">Checkout</div> 
                </div>
            </div> 
        </div>
    )
};

export default ShoppingCart;