import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      <span className="font-thedusCLR">{children}</span>
    </button>
  );
};

export default Button;
