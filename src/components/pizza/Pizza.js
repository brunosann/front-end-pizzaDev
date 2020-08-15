import React from "react";
import "./Pizza.css";

const Pizza = () => {
  return (
    <div className="pizza">
      <img style={{ width: "100px" }} src="./pizza.png" alt="" />
      <span>R$ 20,29</span>
      <span className="pizza-name">Mussarela</span>
      <p>
        Descrição de uma pizza muito boa e gostosa pode ter certeza porque eu
        estou falando
      </p>
      <button>Adicionar ao carrinho</button>
    </div>
  );
};

export default Pizza;
