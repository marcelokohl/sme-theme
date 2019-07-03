import React, { Component, Fragment } from 'react';

const Template = props => {
  const { children, condition } = props;
  let html = []
  if (condition) {
    html.push(<Fragment>{children}</Fragment>)
  } else {
    html.push(<Fragment></Fragment>)
  }
  return html
};

Template.defaultProps = {
  condition: true,
  array: undefined
};

export default Template;
