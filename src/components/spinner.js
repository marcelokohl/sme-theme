import React, { Component } from 'react';

class Spinner extends Component {
  render() {
    const { children, className, tag } = this.props;
    let c = "Spinner " + (className?className:'');
    return (
      <div className={c}></div>
    );
  };
};

export default Spinner;
