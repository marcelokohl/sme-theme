import React from "react";

const Icon = props => {
  const { name, className } = props;
  let c = "Icon" + (className?" "+className:'');
  return (
    <i className={c+' icon-'+name} ></i>
  );
};

export default Icon;
