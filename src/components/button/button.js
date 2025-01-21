import React from "react";

const click = (label) => {
  alert(`A label desse botão é ${label}`);
};
const Button = ({ label }) => {
  return <button onClick={
            () => click(label)}>{label}
          </button>;
};

export default Button;
