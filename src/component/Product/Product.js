
import React from 'react';
import "./Product.css"
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
// import logo from "../../image/logo.png"


const Product = (props) => {
       const {img, name, category, price, key} =props.product;
    return (
       <div className="product_component ">
           <img src={img} alt="" />
           <h2> <Link to ={"/product/" + key}> {name.slice(0, 35)} .. </Link></h2>
           <h3>Category:{category}</h3>
           <h4>Price:${price}</h4>
           <button>Add To Cart <FaCartArrowDown/> </button>
       </div>
    );
};

export default Product;