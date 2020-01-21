import React from "react";

const Tabs = props => {
  const { children, className } = props;
  let c = "Tabs " + (className?className:'');
  return (
    <div className={c}>{children}</div>
  );
};

export default Tabs;
