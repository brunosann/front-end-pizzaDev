import React from "react";
import "./Cart.css";
import PizzaContext from "../PizzaContext";

const Cart = () => {
  const [totalPrice, setTotalPrice] = React.useState(0);
  const {
    pizzasStorage,
    setPizzasStorage,
    setAmountPizza,
    setModal,
  } = React.useContext(PizzaContext);

  React.useEffect(() => {
    if (!pizzasStorage) return setTotalPrice(0);
    const total = pizzasStorage.reduce((acc, p) => {
      const sum = p.qt * p.price;
      return acc + sum;
    }, 0);
    setTotalPrice(total);
  }, [pizzasStorage]);

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

  const checkout = () => {
    window.localStorage.removeItem("pizzas");
    setPizzasStorage(null);
    setAmountPizza(0);
    alert("Obrigado Por comprar com a gente");
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
        <span>R$ {totalPrice.toFixed(2).replace(".", ",")}</span>
      </div>
      <div className="cart-buy">
        <button className="cart-btn-buy" onClick={checkout}>
          Finalizar Compra
        </button>
      </div>
      <div className="close">
        <i
          id="btn-close"
          className="fa fa-close"
          onClick={() => setModal(false)}
        ></i>
      </div>
    </aside>
  );
};

export default Cart;
