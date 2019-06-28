import React, { Component } from 'react';
import { Text, Button, Template, Container, Icon, Titlebar, Image } from "../../../../_temp/sme-theme/src/index.js"

require('./menu.scss');

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: this.props.total,
      current: this.props.current
    }
  }

  createTable = () => {
    let list = []
    for (let i = 1; i <= this.state.total; i++) {
      list.push(<Button className={this.state.current===i?'rounded':'rounded transparent'} key={i}>{i}</Button>)
    }
    return list
  }

  render() {
    const { children, className, page } = this.props;
    let c = "Pagination" + (className?' '+className:'');
    return (
      <div className={c}>
        <Button className="rounded transparent"><Icon name="arrow-left"/></Button>
        {this.createTable()}
        <Button className="rounded transparent"><Icon name="arrow-right"/></Button>
      </div>
    );
  };
};

Pagination.defaultProps = {
  total: 3,
  current: 1
}

export default Pagination;
