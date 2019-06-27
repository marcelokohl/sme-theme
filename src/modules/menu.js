import React, { Component } from 'react';
import { Text, Button, Template, Container, Icon, Titlebar } from "../../../../_temp/sme-theme/src/index.js"

require('./menu.scss');

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
            <Button to="" className="unset pa-l" onClick={() => {this.setState({show: false})}}>
              <Icon src="/images/icons/close.svg" />
            </Button>
            <Text tag="span" className="title lg">Menu</Text>
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
