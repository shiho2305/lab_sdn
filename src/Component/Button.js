import React from "react";

const Button = ({ children, onClick, type }) => {
  return (
    <button className="button__custom" type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
