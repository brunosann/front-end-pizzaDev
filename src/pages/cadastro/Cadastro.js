import React from "react";
import Header from "../../components/header/Header";
import "./Cadastro.css";
import Footer from "../../components/footer/Footer";

const Cadastro = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <div className="content">
          <img src="./51ds643.png" alt="" />
          <div id="form-register">
            <form>
              <h2>Cadastre-se para ofertas e descontos!</h2>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nome"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="name"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="passwd"
                  id="passwd"
                  placeholder="Senha"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Endereço"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="tel"
                  id="tel"
                  placeholder="Telefone"
                  required
                />
              </div>
              <div className="form-group">
                <button className="btn-register" type="button">
                  Cadastrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer fixed="true" />
    </React.Fragment>
  );
};

export default Cadastro;
