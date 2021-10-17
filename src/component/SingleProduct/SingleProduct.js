import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const SingleProduct = () => {
    const {productKey} = useParams()

    const [products, setProducts] = useState([])


    return (
        <div>
            <h3>{productKey} details comming soon</h3>
        </div>
    );
};

export default SingleProduct;