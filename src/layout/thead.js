import React from "react";

const Thead = props => {
  const { children, className } = props;
  let c = (className?className:'');
  return (
    <thead className={c}>{children}</thead>
  );
};

export default Thead;
