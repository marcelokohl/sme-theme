import React from "react";

require('./bg.scss');

const Bg = props => {
  const { className, image, color, overlayerImage, overlayerColor } = props;
  let c = "Bg " + (className?className:'');
  let s = {}
  let sO = {}

  if (image) {
    s.backgroundImage = image
  }
  if (color) {
    s.backgroundColor = color
  }
  if (overlayerImage) {
    sO.backgroundImage = overlayerImage
  }
  if (overlayerColor) {
    sO.backgroundColor = overlayerColor
  }

  if (overlayerImage) {
    return  <div className={c} style={s}><div className="overlayer" style={sO}></div></div>;
  } else {
    return  <div className={c} style={s} />;
  }
};

export default Bg;
