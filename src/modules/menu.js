import React, { Component } from 'react';
import { Text, Button, Template, Container, Icon, Titlebar, Image } from "../../../../_temp/sme-theme/src/index.js"

class Menu extends Component {
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
    const { children, className } = this.props;
    let c = "Menu" + (className?' '+className:'');
    return (
      <div className={this.state.show?c + ' show':c}>
        <Titlebar>
          <Container className="max-w-xs pr">
            <Image src="images/logo.svg" />
          </Container>
        </Titlebar>
        <nav className="menu-content">
          <Container className="max-w-xs pr">
            {children}
          </Container>
        </nav>
      </div>
    );
  };
};

export default Menu;
