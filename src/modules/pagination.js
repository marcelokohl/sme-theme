import React, { Component, Fragment } from 'react';
import { Text, Button, Icon } from "../index.js"

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: this.props.size,
      page: this.props.page,
      step: this.props.step
    }
  }

  buttonClass(i) {
    return this.state.page === i ? 'active':''
  }

  createLeft() {
    return <Button onClick={() => this.prevPage()}><Icon name="arrow-left"/></Button>
  }
  createRight() {
    return <Button onClick={() => this.nextPage()}><Icon name="arrow-right"/></Button>
  }

  createFirst() {
    return (
      <Fragment>
        <Button className={this.buttonClass(1)} onClick={(e) => this.changePage(e)}>1</Button>
        <Text tag="span">...</Text>
      </Fragment>
    )
  }
  createList(s, f) {
    let html =[]
    for (var i = s; i < f; i++) {
      html.push(<Button className={this.buttonClass(i)} onClick={(e) => this.changePage(e)} key={i}>{i}</Button>);
    }
    return html
  }
  createLast() {
    return (
      <Fragment>
        <Text tag="span">...</Text>
        <Button className={this.buttonClass(this.state.size)} onClick={(e) => this.changePage(e)}>{this.state.size}</Button>
      </Fragment>
    )
  }

  changePage(e) {
    this.setPage(Number(e.target.innerHTML))
  }

  prevPage() {
    if (this.state.page <= 1) {
      return
    }
    this.setPage(this.state.page-1)
  }
  nextPage() {
    if (this.state.page >= this.state.size) {
      return
    }
    this.setPage(this.state.page+1)
  }
  setPage(p) {
    this.setState({page: p})
    setTimeout(function(){
      this.props.onChange(this.state.page)
    }.bind(this),100)
  }

  render() {
    const { className, page } = this.props;
    let c = "Pagination" + (className?' '+className:'');
    if (this.state.size < this.state.step * 2 + 6) {
      return (
        <div className={c}>
          {this.createList(1, this.state.size + 1)}
        </div>
      );
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
  step: 1,
  onChange: function functionName() {}
}

export default Pagination;
