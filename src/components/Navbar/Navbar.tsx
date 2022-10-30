import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <header>
      <p>Shopping@com</p>
      <div className="options">
        <i className="fa-regular fa-heart"></i>
        <label>
        <i className="fa-solid fa-cart-shopping"></i>
        <span className="product-count">3</span>
        </label>
      </div>
    </header>
  );
};

export default Navbar;
