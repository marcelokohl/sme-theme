import React from "react";

const Image = props => {
  const { src, className } = props;
  let c = "Image" + (className?" "+className:'');
  return (
    <div className={c}>
      <img src={src} />
    </div>
  );
};

export default Image;
