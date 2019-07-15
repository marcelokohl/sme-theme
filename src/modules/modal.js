import React, { Component } from 'react';
import { Image, Button, Divider, Template, Container } from "../index.js"

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
        <div className="modal-inner">
          <Container className="center">
            {this.props.children}
            <Template condition={this.props.close}>
              <Button className="block outline black mt-lg mb-0 max-w-xs mx-auto" onClick={() => {this.setState({show: false})}}>Fechar</Button>
            </Template>
          </Container>
        </div>
      </div>
    );
  };
};

Modal.defaultProps = {
  close: false
};

export default Modal;
