import React from "react";

const Table = props => {
  const { children, className } = props;
  let c = "Table " + (className?className:'');
  return (
    <table className={c}>{children}</table>
  );
};

export default Table;
