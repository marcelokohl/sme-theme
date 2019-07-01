import React, { Component, Fragment } from 'react';
import { Text, Button } from "../../../../_temp/sme-theme/src/index.js"

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: this.props.size,
      page: this.props.page,
      step: 3
    }
  }

  buttonClass(i) {
    return this.state.page===i?'rounded':'rounded transparent'
  }

  createFirst() {
    return (
      <Fragment>
        <Button className={this.buttonClass(1)} onClick={(e) => this.changePage(e,1)}>1</Button>
        <Text tag="span">...</Text>
      </Fragment>
    )
  }
  createList(s, f) {
    let html =[]
    for (var i = s; i < f; i++) {
      html.push(<Button className={this.buttonClass(i)} onClick={(e) => this.changePage(e,i)} key={i}>{i}</Button>);
    }
    return html
  }
  createLast() {
    return (
      <Fragment>
        <Text tag="span">...</Text>
        <Button className={this.buttonClass(this.state.size)} onClick={(e) => this.changePage(e,this.state.size)}>{this.state.size}</Button>
      </Fragment>
    )
  }

  changePage(el, page) {
    this.setState({page: Number(el.target.innerHTML)})
  }
  componentDidUpdate() {
    this.props.onChange(this.state.page)
  }

  render() {
    const { children, className, page } = this.props;
    let c = "Pagination" + (className?' '+className:'');
    if (this.state.size < this.state.step * 2 + 6) {
      return this.createList(1, this.state.size + 1);
    }
    else if (this.state.page < this.state.step * 2 + 1) {
      return (
        <Fragment>
          {this.createList(1, this.state.step * 2 + 4)}
          {this.createLast()}
        </Fragment>
      )
    }
    else if (this.state.page > this.state.size - this.state.step * 2) {
      return (
        <Fragment>
          {this.createFirst()}
          {this.createList(this.state.size - this.state.step * 2 - 2, this.state.size + 1)}
        </Fragment>
      )
    }
    else {
      return (
        <Fragment>
          {this.createFirst()}
          {this.createList(this.state.page - this.state.step, this.state.page + this.state.step + 1)}
          {this.createLast()}
        </Fragment>
      )
    }
  };
};

Pagination.defaultProps = {
  size: 3,
  page: 1,
  onChange: function functionName() {}
}

export default Pagination;
