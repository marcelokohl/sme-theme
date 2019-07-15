import React, { Component, Fragment } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Button = props => {
  const { children, to, href, className, onClick, target, active, disabled, plugin } = props;
  let c = "Button " + (className?className:'');
  if (active) {
    c += ' active';
  }
  if (disabled) {
    c += ' disabled';
  }
  if (to) {
    const Link = plugin;
    return <Link className={c} to={to} onClick={onClick}>{children}</Link>;
  } else if (href) {
    return <a className={c} href={href} target={target}>{children}</a>;
  } else {
    return <button disabled={disabled} className={c} onClick={onClick}>{children}</button>;
  }
};

Button.defaultProps = {
  target: '_self',
  disabled: false,
  onClick: function functionName() {}
};

export default Button;
