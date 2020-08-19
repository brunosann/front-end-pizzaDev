import React from "react";
import Header from "../../components/header/Header";
import Pizza from "../../components/pizza/Pizza";
import Footer from "../../components/footer/Footer";
import Cart from "../../components/cart/Cart";
import "./Home.css";

const Home = () => {
  const handleClickPizza = ({ target }) => {
    console.log(target.parentElement);
  };

  return (
    <React.Fragment>
      <Header />
      <Cart />
      <div className="container">
        <p className="lead">Em breve ofertas especiais para CADASTRADOS!</p>
        <div className="pizzas">
          <Pizza clickPiza={handleClickPizza} />
          <Pizza clickPiza={handleClickPizza} />
          <Pizza clickPiza={handleClickPizza} />
          <Pizza clickPiza={handleClickPizza} />
          <Pizza clickPiza={handleClickPizza} />
        </div>
      </div>
      <Footer fixed="" />
    </React.Fragment>
  );
};

export default Home;
