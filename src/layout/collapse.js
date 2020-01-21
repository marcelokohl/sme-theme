import React from 'react';
import { Template } from "../index.js"

class Collapse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: this.props.show
    }
  }
  toggle() {
    this.props.onToggle(!this.state.show)
    this.setState({show: !this.state.show})
  }
  render() {
    const { children, className, show } = this.props;
    let c = "Collapse" + (' '+className?className:'');
    return (
      <Template condition={this.state.show}>
        <div className={c}>{children}</div>
      </Template>
    );
  };
}

Collapse.defaultProps = {
  show:false
};

export default Collapse;
