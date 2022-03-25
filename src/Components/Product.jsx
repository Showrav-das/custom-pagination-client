import React from 'react';
import "./main.css";

const Product = ({ product }) => {
    const { category,name, ratings, ratingsCount,price,img,stock } = product;
    return (
        <div className='product-container'>
            <div className="image">
                <img src={img} height="200px" alt="" />
            </div>
            <div className="product">
                <h2> Product Name: {name}</h2>
                <h5>Category: {category}</h5>
                <h5>Price: ${price} </h5>
                <h5>Stock: {stock} </h5>
                <h5>Rating: {ratings} </h5>
                <h5>Rating Count: {ratingsCount} </h5>
                <button id='cart-btn'>Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;