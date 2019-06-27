import React, { Component, Fragment } from 'react';

require('./counter.scss');

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      endValue: undefined
    }
  }

  update() {
    if (this.state.onEnd != undefined) {
      this.setState({endValue: this.state.value+Number(this.props.step)})
      if ((this.props.step < 0 && this.state.endValue == 0) || (this.props.step < 0 && this.state.endValue == this.props.endValue)) {
        this.props.onEnd();
        clearTimeout(this.timer);
      }
    }

    if (this.props.step < 0 && this.state.value == 0 && this.props.onComplete) {
      this.setState({value: this.props.max-1});
      if (this.props.onComplete) {
        this.props.onComplete();
      }
      return;
    } else if (this.props.step > 0 && this.state.value == this.props.max-1) {
      this.setState({value: 0});
      if (this.props.onComplete) {
        this.props.onComplete();
      }
      return;
    }
    this.setState({value: this.state.value+Number(this.props.step)})
  }

  componentDidMount() {
    this.setState({value: Number(this.props.children)})
    this.setState({endValue: Number(this.props.end)})
    if (this.props.active) {
      var t = this;
      this.timer = setInterval(function() {
          t.update();
      },this.props.interval*1000);
    }
  }

  render() {
    const { children, className, type } = this.props;
    let c = "Counter " + (className?className:'');
    return (
      <span className={c}>
        {this.state.value < 10?"0"+this.state.value:this.state.value}
      </span>
    );
  };
};

Counter.defaultProps = {
  children: 0,
  endValue:undefined,
  onEnd: undefined
};

export default Counter;
