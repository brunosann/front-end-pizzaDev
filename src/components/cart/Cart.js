import React from "react";
import "./Cart.css";
import PizzaContext from "../PizzaContext";

const Cart = () => {
  const { pizzasStorage, setPizzasStorage } = React.useContext(PizzaContext);

  const removePizza = ({ target }) => {
    const selectedPizza = target.parentElement.previousElementSibling.innerText;
    const oldPizzas = [...pizzasStorage];
    const pizzaIndex = oldPizzas.findIndex((p) => p.pizza === selectedPizza);
    const pizza = oldPizzas.find((p) => p.pizza === selectedPizza);
    pizza.qt--;
    oldPizzas.splice(pizzaIndex, 1, pizza);
    if (pizza.qt === 0) {
      oldPizzas.splice(pizzaIndex, 1);
    }
    window.localStorage.setItem("pizzas", JSON.stringify(oldPizzas));
    setPizzasStorage(oldPizzas);
  };

  const morePizza = ({ target }) => {
    const selectedPizza = target.parentElement.previousElementSibling.innerText;
    const oldPizzas = [...pizzasStorage];
    const pizzaIndex = oldPizzas.findIndex((p) => p.pizza === selectedPizza);
    const pizza = oldPizzas.find((p) => p.pizza === selectedPizza);
    pizza.qt++;
    oldPizzas.splice(pizzaIndex, 1, pizza);
    window.localStorage.setItem("pizzas", JSON.stringify(oldPizzas));
    setPizzasStorage(oldPizzas);
  };

  return (
    <aside>
      <h2>Suas Pizzas</h2>
      {pizzasStorage &&
        pizzasStorage.map((pizza, index) => (
          <div key={index} className="cart-pizza">
            <span className="cart-pizza-name">{pizza.pizza}</span>
            <div className="cart-btn-group">
              <button onClick={removePizza}>-</button>
              <button>{pizza.qt}</button>
              <button onClick={morePizza}>+</button>
            </div>
          </div>
        ))}

      <div className="cart-pizza">
        <h3>Total</h3>
        <span>R$ 18,10</span>
      </div>
      <div className="cart-buy">
        <button className="cart-btn-buy">Finalizar Compra</button>
      </div>
    </aside>
  );
};

export default Cart;
