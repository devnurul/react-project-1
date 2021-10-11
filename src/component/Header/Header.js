import React from 'react';
import logo from '../../image/logo.png';
import './Header.css';
const Header = () => {
  
    return (
        <>
          <div className="header bg-dark">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-4">
                        <div className="logo">
                          <img src={logo} alt="" />
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <nav className ="d-flex justify-content-between">
                          <a href="/shop">Shop</a>
                          <a href="/review">Review</a>
                          <a href="/checkOut">Check Out</a>
                          <a href="/inventory">Inventory Management</a>
                        </nav>
                      </div>
                  </div>
              </div>
          </div>
        </>
      );
};

export default Header;