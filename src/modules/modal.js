import React, { Component } from 'react';
import { Image, Button, Divider, Template, Container, Spinner, Text } from "../index.js"

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      hidden: true
    }
  }
  show() {
    this.setState({show: true})
    this.setState({hidden: false})
  }
  hide() {
    this.setState({show: false})
    var t = this
    setTimeout(function() {
      t.setState({hidden: true})
    }, 400)
  }

  render() {
    let c = "Modal" + (this.state.show?' show ':' ') + (this.props.className?this.props.className:'') + (this.props.loading?' loading':'');
    return (
      <div className={c}>
        <div className="modal-inner">
          <Container className="center">
            {!this.state.hidden && this.props.children}
            <Template condition={this.props.close}>
              <Button className="block outline black mt-lg mb-0 max-w-xs mx-auto" onClick={() => {this.hide()}}>Fechar</Button>
            </Template>
          </Container>
        </div>
        {this.props.loading &&
          <div className="modal-loading">
          <div className="modal-loader">
          <Spinner className="primary lg" />
          <Text className="primary lg mt-md">Carregando...</Text>
          </div>
          </div>
        }
      </div>
    );
  };
};

Modal.defaultProps = {
  close: false,
  loading: false
};

export default Modal;
