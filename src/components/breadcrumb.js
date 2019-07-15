import React from "react";

const Breadcrumb = props => {
  const { children, className, tag } = props;
  let c = "Breadcrumb " + (className?className:'');
  return (
    <div className={c}>{children}</div>
  );
};

export default Breadcrumb;
