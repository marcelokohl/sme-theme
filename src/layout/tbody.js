import React from "react";

const Tbody = props => {
  const { children, className } = props;
  let c = (className?className:'');
  return (
    <tbody className={c}>{children}</tbody>
  );
};

export default Tbody;
