import React from "react";

require('./icon.scss');

const Icon = props => {
  const { src, className } = props;
  let c = "Icon" + (className?" "+className:'');
  return (
    <img src={src} className={c} />
  );
};

export default Icon;
