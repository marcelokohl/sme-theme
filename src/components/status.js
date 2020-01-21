import React from "react";

const Status = props => {
  const { children, className, success, error } = props;
  let c = "Status" + (className?' '+className:'');
  if (success) {
    c += " success"
  }
  if (error) {
    c += " error"
  }
  return <span className={c}>{children}</span>
};
export default Status;
