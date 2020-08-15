import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="header-nav">
          <div className="logo">
            <h1>PizzaDev</h1>
          </div>
          <div className="user">
            <span className="user-log">Login</span>
            <i id="sign" className="fa fa-sign-in"></i>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
