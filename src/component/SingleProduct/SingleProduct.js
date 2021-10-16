// import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Product from '../Product/Product';

const SingleProduct = () => {
    const {productKey} = useParams()

    // const [products, setProducts] = useState([])

    // useEffect(() => {
    //     const url = 'https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON'
    //     fetch(url)
    //     .then( res => res.json())
    //     .then( data => setProducts(data.slice(20,35)))
    // },[])


    
    return (
        <div>
            {
                
            }
        </div>
    );
};

export default SingleProduct;