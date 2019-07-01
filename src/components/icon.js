import React from "react";

const Icon = props => {
  const { name, className } = props;
  let c = "Icon" + (className?" "+className:'');
  return (
    <img src={`images/icons/${name}.svg`} className={c} />
  );
};

export default Icon;
