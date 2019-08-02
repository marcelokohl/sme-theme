import React from "react";

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
