import React, { Component } from 'react';
import { Icon } from "../index.js"

class Spinner extends Component {
  render() {
    const { children, className } = this.props;
    let c = "Spinner " + (className?className:'');
    return (
      <div className={c}>
        <Icon name="spinner"/>
      </div>
    );
  };
};

export default Spinner;
