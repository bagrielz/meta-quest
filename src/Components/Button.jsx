import React from "react";

const Button = ({ type, text, setIcon, icon }) => {
  return (
    <button className={type}>
      <span>{text}</span>
      <img
        className={setIcon ? "active" : "disabled"}
        src={icon}
        alt="Ícone do botão"
      />
    </button>
  );
};

export default Button;
