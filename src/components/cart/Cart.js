import React from "react";
import "./Cart.css";

const Cart = () => {
  const [storage, setStorage] = React.useState(null);
  React.useEffect(() => {
    setStorage(JSON.parse(window.localStorage.getItem("pizzas")));
  }, []);
  return (
    <aside>
      <h2>Suas Pizzas</h2>
      {storage &&
        storage.map((pizza, index) => (
          <div key={index} className="cart-pizza">
            <span className="cart-pizza-name">{pizza.pizza}</span>
            <div className="cart-btn-group">
              <button>-</button>
              <button>{pizza.qt}</button>
              <button>+</button>
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
