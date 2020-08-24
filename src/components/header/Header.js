import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const handleCart = () => {
    const sectionCart = document.querySelector("aside");
    sectionCart.style.display = "block";
  };

  return (
    <header>
      <div className="container">
        <nav className="header-nav">
          <div className="logo">
            <Link to="/">
              <h1>PizzaDev</h1>
            </Link>
          </div>
          <div className="user">
            <Link to="/login">
              <span className="user-log">Login</span>
              <i id="sign" className="fa fa-sign-in"></i>
            </Link>
            <i
              onClick={handleCart}
              id="cart"
              style={{ color: "#fff", cursor: "pointer" }}
              className="fa fa-shopping-cart"
            ></i>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
