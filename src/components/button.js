import React, { Component, Fragment } from 'react';
import { Spinner } from "../index.js"

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.active
    }
  }

  setActive(a) {
    this.setState({active: a})
  }

  render() {
    const { children, to, href, className, target, active, disabled, plugin, ga, loading, type, onClick, behaviour } = this.props;
    let c = "Button " + (className?className:'');
    if (this.state.active) c += ' active'
    if (disabled) c += ' disabled'
    if (behaviour) c += ' behaviour-'+behaviour
    if (loading) c += ' loading disabled'

    function onClickB(e) {
      onClick(e)
      if (typeof gtag !== "undefined") {
        gtag('event',  ga)
      }
    }

    if (to) {
      const Link = plugin;
      return <Link className={c} to={to} onClick={onClickB}>{children}</Link>;
    } else if (href) {
      return <a className={c}  href={href} onClick={onClickB} target={target}>{children}</a>;
    } else {
      return (
        <button disabled={disabled || loading} type={type} className={c} onClick={onClickB}>
          {(loading && behaviour != 'refresh') && <Spinner />}
          {(!loading && behaviour != 'refresh') && children}
          {(behaviour == 'refresh') && children}
        </button>
      );
    }
  };
};
//gtag('event',  'chico-buarque-75-entrar')
Button.defaultProps = {
  type: 'button',
  target: '_self',
  disabled: false,
  active: false,
  onClick: function functionName() {}
};

export default Button;
