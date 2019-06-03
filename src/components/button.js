import React from "react";

require('./button.scss');

const Button = props => {
  const { children } = props;
  return (
    <button className="Button">{children}</button>
  );
};

export default Button;
