import React from "react";

const Image = props => {
  const { src, className } = props;
  let c = "Image" + (className?" "+className:'');
  return (
    <img src={src} className={c} />
  );
};

export default Image;
