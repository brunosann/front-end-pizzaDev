import React from "react";
import { Link } from "react-router-dom";
import PizzaContext from "../PizzaContext";
import "./Header.css";

const Header = () => {
  const { setModal, amountPizza } = React.useContext(PizzaContext);

  const handleCart = () => {
    setModal((old) => !old);
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
            <i
              onClick={handleCart}
              id="cart"
              className="fa fa-shopping-cart"
            ></i>
            <span className="amount">{amountPizza}</span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
