import React from "react";
import Header from "../../components/header/Header";
import Pizza from "../../components/pizza/Pizza";
import "./Home.css";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <p className="lead">Pizza para todos os gostos...Experimente!</p>
        <div className="pizzas">
          <Pizza />
          <Pizza />
          <Pizza />
          <Pizza />
          <Pizza />
          <Pizza />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
