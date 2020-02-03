import React from "react";
import { Button, Icon } from "../index.js"

class Badge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.active
    }
  }

  setActive(a) {
    this.setState({active: a})
    this.props.onClick(a)
  }

  render() {
    const { children, className, close, onClose, onClick, active } = this.props;
    let c = "Badge " + (className?className:'') + (this.state.active || !onClick?' active':'');
    return (
      <span className={c}>
        {onClick &&
          <Button className="badge-inner" onClick={()=>this.setActive(!this.state.active)}>{children}</Button>
        }
        {!onClick &&
          <span className="badge-inner">
          {children}
          {close &&
            <Button className="badge-close" onClick={()=>onClose()}><Icon name="close"/></Button>
          }
          </span>
        }

      </span>
    );
  };
};

Badge.defaultProps = {
  onClose: function functionName() {},
  onClick: false
};

export default Badge;
