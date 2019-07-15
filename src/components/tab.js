import React, { Component, Fragment } from 'react';

const Tab = props => {
  const { children, render, className } = props;
  let c = "Tab " + (className?className:'');
  if (render) {
    return <div className={c}>{children}</div>
  }
  
  return <Fragment></Fragment>
};

Tab.defaultProps = {
  render: true
};

export default Tab;
