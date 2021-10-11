import React from 'react';
import "./Error.css"
import { FaExpeditedssl } from "react-icons/fa";
const Error_404 = () => {
    return (
        <div className="errorPage">
            <div>
            <h2> 4 <FaExpeditedssl/> 4 Error!!!</h2>
            <h3>Page not Found</h3>
            </div>
        </div>
    );
};

export default Error_404;