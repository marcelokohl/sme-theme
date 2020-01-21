import React, { Component } from 'react';

const Form = props => {
  const { children, onSubmit, className } = props;
  let c = "Form " + (className?className:'');
  return (
    <form onSubmit={onSubmit}>{children}</form>
  )
};

Form.defaultProps = {
  onSubmit: function f() {}
};

export default Form;
