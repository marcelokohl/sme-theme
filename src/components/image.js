import React from "react";

const Image = props => {
  const { src, className, alt } = props;
  let c = "Image" + (className?" "+className:'');
  return (
    <div className={c}>
      <img src={src} alt={alt} />
    </div>
  );
};

Image.defaultProps = {
  alt: "Imagem"
}

export default Image;
