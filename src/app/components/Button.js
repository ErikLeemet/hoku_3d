import React from "react";

const Button = ({ children }) => {
  return (
    <button className="btn">
        <span className="font-thedusCLR">{children}</span>
    </button>
  );
};

export default Button;
