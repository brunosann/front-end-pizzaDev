import React from "react";
import "./Footer.css";

const Footer = ({ fixed }) => {
  return (
    <footer style={fixed ? { position: "fixed" } : { position: "relative" }}>
      <div className="container">
        <div className="footer-content">
          <div className="hour">
            <h3>Horário de Atendimento</h3>
            <span>Dom - Dom 18h às 00H</span>
          </div>
          <div className="social">
            <h3>Redes Sociais</h3>
            <i className="fa fa-facebook-square"></i>
            <i className="fa fa-instagram"></i>
          </div>
          <div className="contact">
            <h3>Contato</h3>
            <span>44 36005599</span>
          </div>
        </div>
      </div>
      <div className="copy">
        Direitos Reservados &copy; Desenvolvido por{" "}
        <a href="https://www.linkedin.com/in/bruno-teixeira-920661142/">
          Bruno Teixeira
        </a>
      </div>
    </footer>
  );
};

export default Footer;
