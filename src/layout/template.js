import React, { Component, Fragment } from 'react';

const Template = props => {
  const { children, condition } = props;
  let html = []
  if (condition) {
    return React.createElement(React.Fragment, {}, children)
  } else {
    return React.createElement(React.Fragment, {}, [])
  }
};

Template.defaultProps = {
  condition: true,
  array: undefined
};

export default Template;
