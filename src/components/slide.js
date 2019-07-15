import React from 'react';

const Slide = props => {
  const { children, className } = props;
  let c = "Slide " + (className?className:'');
  return <div className={c}>{children}</div>
};

export default Slide;
