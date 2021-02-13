import React from 'react';

const ItemOrder = ({product}) => {
    return (
        <div className="product clearfix">
            <div className="left">
                <img 
                    src={product.image} 
                    alt={product.alt} 
                    className="image" 
                /> 
            </div>
            <div className="details">
                <p className="name">{product.name}</p>
                <p>
                    {product.size}cm, {product.thickness}mm, {product.finish}
                </p>
                <p>${product.price}</p>
                <p>Quantity: <span>{product.quantity}</span></p>
            </div>
        </div>   
    )
}

export default ItemOrder;