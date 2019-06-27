import React from "react";

require('./table.scss');

const Table = props => {
  const { children, gutter } = props;
  return (
    <table className={"Table"}>{children}</table>
  );
};

export default Table;
