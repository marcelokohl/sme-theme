import React from "react";

const Grid = props => {
  const { children, gutter, className } = props;
  let c = "Grid " + (className?className:'');
  return (
    <div className={c}>{children}</div>
  );
};

export default Grid;
