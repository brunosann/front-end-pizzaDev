import React from "react";
import "./Pizza.css";

const Pizza = ({ id, name, img, size_g, size_m, size_p, description }) => {
  const [priceSize, setPricesize] = React.useState(size_g);
  const [sizePizza, setSizePizza] = React.useState("Grande");

  const changeBtnActive = (target) => {
    target.parentElement
      .querySelectorAll("button")
      .forEach((b) => b.classList.remove("active"));
    target.classList.add("active");
  };

  const changePrice = ({ target }) => {
    const size = target.innerText;
    setSizePizza(size);
    changeBtnActive(target);
    if (size === "Grande") return setPricesize(size_g);
    else if (size === "Média") return setPricesize(size_m);
    else if (size === "Pequena") return setPricesize(size_p);
  };

  const addCart = () => {
    let pizzas = JSON.parse(window.localStorage.getItem("pizzas"));
    if (!pizzas) {
      pizzas = [];
    }
    const pizza = { id, pizza: `${name}(${sizePizza.charAt(0)})`, qt: 1 };
    const existPizza = pizzas.find((p) => p.pizza === pizza.pizza);
    if (existPizza) {
      existPizza.qt++;
    } else {
      pizzas.push(pizza);
    }
    window.localStorage.setItem("pizzas", JSON.stringify(pizzas));
  };

  return (
    <div className="pizza">
      <img
        style={{ width: "100px" }}
        src={`http://localhost:3333/${img}`}
        alt=""
      />
      <span>R$ {priceSize.toFixed(2).replace(".", ",")}</span>
      <span className="pizza-name">{name}</span>
      <p>{description}</p>
      <div className="btn-group-size">
        <button onClick={changePrice} className="btn-size btn-big active">
          Grande
        </button>
        <button onClick={changePrice} className="btn-size btn-average">
          Média
        </button>
        <button onClick={changePrice} className="btn-size btn-small">
          Pequena
        </button>
      </div>
      <button onClick={addCart} className="btn-buy">
        Adicionar ao carrinho
      </button>
    </div>
  );
};

export default Pizza;
