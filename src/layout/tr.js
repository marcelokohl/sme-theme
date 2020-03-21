import React from "react";

const Tr = props => {
  const { children, className } = props;
  let c = (className?className:null);
  return (
    <tr className={c}>{children}</tr>
  );
};

export default Tr;
