import React from "react";


const Alertbutton = ({ label }) => {
  return <button onClick={
            () => alert(`A label desse botão é ${label}`) }>
              {label}
          </button>;
};

export default Alertbutton;


