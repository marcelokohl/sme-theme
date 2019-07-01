import React from "react";

const Status = props => {
  const { children, className, active } = props;
  let c = "Status" + (className?' '+className:'');
  if (active) {
    c += " active"
  }
  return <span className={c}>{children}</span>
};
export default Status;
