import React from "react";
import Header from "../../components/header/Header";
import Pizza from "../../components/pizza/Pizza";
import Footer from "../../components/footer/Footer";
import Cart from "../../components/cart/Cart";
import "./Home.css";

const Home = () => {
  const [pizzas, setPizzas] = React.useState(null);

  const getPizzas = async () => {
    const pizzas = await fetch("http://localhost:3333/");
    const pizzasJson = await pizzas.json();
    setPizzas(pizzasJson);
  };
  React.useEffect(() => {
    getPizzas();
  }, []);

  if (!pizzas) return null;

  return (
    <React.Fragment>
      <Header />
      <Cart />
      <div className="container">
        <p className="lead">Em breve ofertas especiais para CADASTRADOS!</p>
        <div className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza key={pizza.id} {...pizza} />
          ))}
        </div>
      </div>
      <Footer fixed="" />
    </React.Fragment>
  );
};

export default Home;
