import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
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
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
