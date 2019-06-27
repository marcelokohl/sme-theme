import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

require('./button.scss');

const Button = props => {
  const { children, to, href, className, onClick, target } = props;
  let c = "Button " + (className?className:'');
  if (to) {
    if (window.location.pathname == to) {
      c += ' active';
    }
    return <Link className={c} to={to}>{children}</Link>;
  } else if (href) {
    return <a className={c} href={href} target={target}>{children}</a>;
  } else {
    return <button className={c} onClick={onClick}>{children}</button>;
  }
};

Button.defaultProps = {
  target: '_self'
};

export default Button;
