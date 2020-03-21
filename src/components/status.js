import React from "react";

const Status = props => {
  const { children, className, success, error, alert } = props;
  let c = "Status" +
  (className?' '+className:'') +
  (success?' '+' success':'') +
  (error?' '+' error':'') +
  (alert?' '+' alert':'')

  return <span className={c}>{children}</span>
};
export default Status;
