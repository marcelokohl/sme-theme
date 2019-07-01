import React from "react";

const Table = props => {
  const { children, gutter } = props;
  return (
    <table className={"Table"}>{children}</table>
  );
};

export default Table;
