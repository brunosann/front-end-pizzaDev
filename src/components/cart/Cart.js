import React from "react";
import "./Cart.css";

const Cart = () => {
  return (
    <aside>
      <h2>Suas Pizzas</h2>
      <div className="cart-pizza">
        <span className="cart-pizza-name">Mussarela(G)</span>
        <div className="cart-btn-group">
          <button>-</button>
          <button>1</button>
          <button>+</button>
        </div>
      </div>
      <div className="cart-pizza">
        <span className="cart-pizza-name">Mussarela(P)</span>
        <div className="cart-btn-group">
          <button>-</button>
          <button>2</button>
          <button>+</button>
        </div>
      </div>
      <div className="cart-pizza">
        <span className="cart-pizza-name">Mussarela(P)</span>
        <div className="cart-btn-group">
          <button>-</button>
          <button>2</button>
          <button>+</button>
        </div>
      </div>
      <div className="cart-pizza">
        <span className="cart-pizza-name">Mussarela(P)</span>
        <div className="cart-btn-group">
          <button>-</button>
          <button>2</button>
          <button>+</button>
        </div>
      </div>
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
