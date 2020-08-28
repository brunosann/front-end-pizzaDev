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
  const [modal, setModal] = React.useState(false);
  const [amountPizza, setAmountPizza] = React.useState(0);

  React.useEffect(() => {
    setPizzasStorage(JSON.parse(window.localStorage.getItem("pizzas")));
  }, []);

  React.useEffect(() => {
    const pizzas = JSON.parse(window.localStorage.getItem("pizzas"));
    if (!pizzas) return;
    const amount = pizzas.reduce((acc, p) => {
      return acc + p.qt;
    }, 0);
    setAmountPizza(amount);
  }, [pizzasStorage]);

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
      <PizzaContext.Provider
        value={{
          setPizzasStorage,
          pizzasStorage,
          setModal,
          amountPizza,
          setAmountPizza,
        }}
      >
        <Header />
        {modal && <Cart />}
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
