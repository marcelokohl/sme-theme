import React, { Component, Fragment } from 'react';

const Template = props => {
  const { children, condition, array } = props;
  let html = []
  // if (array) {
  //   array.map(function(name, index){
  //     html.push(<Fragment key={index}>{children}</Fragment>)
  //   })
  // } else
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
