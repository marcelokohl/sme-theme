import React, { Component } from 'react';
import { Text, Button, Template, Container, Icon, Titlebar, Image } from "../index.js"

class Menubar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }
  show() {
    this.setState({show: true})
  }
  hide() {
    this.setState({show: false})
  }
  render() {
    const { children, className, collapse, header } = this.props;
    let c = "Menubar" + (className?' '+className:'');
    if (collapse) {
      c += " collapse-"+collapse
    }
    return (
      <div className={this.state.show?c + ' show':c}>
        <header>
          {header}
        </header>
        <nav className="menu-content">
          {children}
        </nav>
      </div>
    );
  };
};

export default Menubar;
