import React from "react";

const Container = props => {
  const { children, className } = props;
  let c = "Container" + (className?' '+className:'');
  return (
    <div className={c}>{children}</div>
  );
};

export default Container;
