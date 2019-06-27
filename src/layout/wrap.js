import React from 'react';

require('./wrap.scss');

const Wrap = props => {
  const { children, className } = props;
  let c = "Wrap " + (className?className:'');
  return <div className={c}>{children}</div>
};

export default Wrap;
