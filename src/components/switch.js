import React from "react";

require('./switch.scss');

const Switch = props => {
  const { className } = props;
  let c = "Switch " + (className?className:'');
  return <span className={c}></span>
};
export default Switch;
