
import React from 'react';
import "./Product.css"
import logo from "../../image/logo.png"


const Product = () => {
    // const {name, img, price, seller, category} = props.Product
    return (
       <div className="product_component">
           <img src={logo} alt="" />
           <h4>Price:$000</h4>
           <h2> This is product Name</h2>
           <button>Add To Cart</button>
       </div>
    );
};

export default Product;