import React from "react";

require('./divider.scss');

const Divider = props => {
  const { children, className } = props;
  let c = "Divider " + (className?className:'');
  return (
    <div className={c}>{children}</div>
  );
};

export default Divider;
