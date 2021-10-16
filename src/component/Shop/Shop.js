import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "../Shop.css";

const Shop = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const url = 'https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON'
        fetch(url)
        .then( res => res.json())
        .then( data => setProducts(data.slice(20,35)))
    },[])~

    return (
        <>
         <div className="title">
            <h1>Shop Page</h1>
        </div>
        <div className="shopPage container">
            <div className="shop">
                {
                    products.map(prod => <Product product ={prod}></Product>)
                }
            
            </div>
            <div className="sideBar">
                <h2>This is side bar</h2>
            </div>
        </div>
        </>
    );
};

export default Shop;