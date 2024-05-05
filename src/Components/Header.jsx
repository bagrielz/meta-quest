import React from "react";

// Ícones
import Delivery from "../assets/icons/Delivery.svg";
import Test from "../assets/icons/Test.svg";
import Protection from "../assets/icons/Protection.svg";
import Down from "../assets/icons/Down.svg";
import AddPlus from "../assets/icons/AddPlus.svg";

// Imagem
import Logo from "../assets/Logo.svg";
import Button from "./Button";

const Header = () => {
  return (
    <header>
      <div className="bar">
        <div>
          <img src={Delivery} alt="Ícone de entrega" />
          <span>Entrega grátis</span>
        </div>
        <div>
          <img src={Test} alt="Ícone de teste" />
          <span>Teste sem preocupações</span>
        </div>
        <div>
          <img src={Protection} alt="Ícone de garantia" />
          <span>Garantia</span>
        </div>
      </div>

      <div className="menu">
        <img className="logo" src={Logo} alt="Logotipo da Meta" />
        <div className="nav">
          <ul>
            <li>
              <span>Meta Quest</span>
              <img src={Down} alt="Ícone de uma seta para baixo" />
            </li>
            <li>
              <span>Jogos e Apps</span>
              <img src={Down} alt="Ícone de uma seta para baixo" />
            </li>
            <li>
              <span>Comparação</span>
            </li>
            <li>
              <span>Acessórios</span>
            </li>
          </ul>
          <div>
            <Button
              type="secondary-btn"
              text="Agende uma demonstração"
              setIcon={false}
            />
            <Button
              type="primary-icon-btn"
              text="Compre agora"
              setIcon={true}
              icon={AddPlus}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
