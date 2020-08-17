import React from "react";
import "./Pizza.css";

const Pizza = ({ clickPiza }) => {
  return (
    <div className="pizza">
      <img style={{ width: "100px" }} src="./pizza.png" alt="" />
      <span>R$ 20,29</span>
      <span className="pizza-name">Mussarela</span>
      <p>
        Descrição de uma pizza muito boa e gostosa pode ter certeza porque eu
        estou falando
      </p>
      <div className="btn-group-size">
        <button className="btn-size btn-big active">Grande</button>
        <button className="btn-size btn-average">Média</button>
        <button className="btn-size btn-small">Pequena</button>
      </div>
      <button className="btn-buy" onClick={clickPiza}>
        Adicionar ao carrinho
      </button>
    </div>
  );
};

export default Pizza;
