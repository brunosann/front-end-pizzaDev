import React from "react";
import Header from "../../components/header/Header";
import Pizza from "../../components/pizza/Pizza";
import Footer from "../../components/footer/Footer";
import Cart from "../../components/cart/Cart";
import PizzaContext from "../../components/PizzaContext";
import "./Home.css";

const Home = () => {
  const [pizzas, setPizzas] = React.useState(null);
  const [pizzasStorage, setPizzasStorage] = React.useState([]);

  React.useEffect(() => {
    setPizzasStorage(JSON.parse(window.localStorage.getItem("pizzas")));
  }, []);

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
      <PizzaContext.Provider value={{ setPizzasStorage, pizzasStorage }}>
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
      </PizzaContext.Provider>
    </React.Fragment>
  );
};

export default Home;
