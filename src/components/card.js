import React from "react";
import { Grid } from "../index.js"

const Card = props => {
  const { children, className } = props;
  let c = "Card " + (className?className:'');
  return (
    <div className={c}>
      {children}
    </div>
  );
};

export default Card;
