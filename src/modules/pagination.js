import React, { Component, Fragment } from 'react';
import { Text, Button, Icon } from "../../../../_temp/sme-theme/src/index.js"

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

  createLeft() {
    return <Button className="rounded transparent" onClick={() => this.prevPage()}><Icon name="arrow-left"/></Button>
  }
  createRight() {
    return <Button className="rounded transparent" onClick={() => this.nextPage()}><Icon name="arrow-right"/></Button>
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

  prevPage() {
    if (this.state.page <= 1) {
      return
    }
    this.setState({page: this.state.page-1})
  }
  nextPage() {
    if (this.state.page >= this.state.size) {
      return
    }
    this.setState({page: this.state.page+1})
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
        <div className={c}>
          {this.createLeft()}
          {this.createList(1, this.state.step * 2 + 4)}
          {this.createLast()}
          {this.createRight()}
        </div>
      )
    }
    else if (this.state.page > this.state.size - this.state.step * 2) {
      return (
        <div className={c}>
          {this.createLeft()}
          {this.createFirst()}
          {this.createList(this.state.size - this.state.step * 2 - 2, this.state.size + 1)}
          {this.createRight()}
        </div>
      )
    }
    else {
      return (
        <div className={c}>
          {this.createLeft()}
          {this.createFirst()}
          {this.createList(this.state.page - this.state.step, this.state.page + this.state.step + 1)}
          {this.createLast()}
          {this.createRight()}
        </div>
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
