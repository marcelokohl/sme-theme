import React from "react";

const Tbody = props => {
  const { children, className } = props;
  return (
    <tbody className={(className?className:null)}>{children}</tbody>
  );
};

export default Tbody;
