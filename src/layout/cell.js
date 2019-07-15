import React from "react";

const Cell = props => {
  const { children, size, className } = props;
  let c = "Cell-" + size + " " + (className?className:'');
  return (
    <div className={c}>{children}</div>
  );
};

export default Cell;
