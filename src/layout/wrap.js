import React from 'react';

const Wrap = props => {
  const { children, className, style } = props;
  let c = "Wrap " + (className?className:'');
  return <div className={c}  style={style}>{children}</div>
};

export default Wrap;
