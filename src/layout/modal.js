import React, { Component } from 'react';
import { Image, Button, Divider, Template, Container } from "../../../../_temp/sme-theme/src/index.js"

class Modal extends Component {
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
    // const { children, name, className } = this.props;
    let c = "Modal " + (this.state.show?'show':' ') + (this.props.className?this.props.className:'');
    return (
      <div className={c}>
        <div className="Modal-inner">
          <Container className="max-w-xs">
            {this.props.children}
            <Template condition={this.props.close}>
              <Divider className="my-md invert"/>
              <Button className="block" onClick={() => {this.setState({show: false})}}>Fechar</Button>
            </Template>
          </Container>
        </div>
      </div>
    );
  };
};

Modal.defaultProps = {
  close: true
};

export default Modal;
