import React from "react";

require('./alert.scss');

const Alert = props => {
  const { children, className } = props;
  let c = "Alert " + (className?className:'');
  return (
    <div className={c}>{children}</div>
  );
};

export default Alert;
