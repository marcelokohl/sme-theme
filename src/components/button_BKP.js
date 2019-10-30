import React, { Component, Fragment } from 'react';
import { Spinner } from "../index.js"

const Button = props => {
  const { children, to, href, className, target, active, disabled, plugin, ga, loading, type } = props;
  let c = "Button " + (className?className:'');
  if (active) c += ' active'
  if (disabled) c += ' disabled'
  if (loading) c += ' loading disabled'
  function onClick(e) {
    props.onClick(e)
    if (typeof gtag !== "undefined") {
      gtag('event',  ga)
    }
  }
  if (to) {
    const Link = plugin;
    return <Link className={c} to={to} onClick={onClick}>{children}</Link>;
  } else if (href) {
    return <a className={c}  href={href} onClick={onClick} target={target}>{children}</a>;
  } else {
    return (
      <button disabled={disabled || loading} type={type} className={c} onClick={onClick}>
        {loading && <Spinner />}
        {!loading && children}
      </button>
    );
  }
};
//gtag('event',  'chico-buarque-75-entrar')
Button.defaultProps = {
  type: 'button',
  target: '_self',
  disabled: false,
  onClick: function functionName() {}
};

export default Button;
