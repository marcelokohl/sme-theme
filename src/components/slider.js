import React, { Component } from 'react';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: 0,
      end: false
    }
  }
  next() {
    this.setState({slide: this.state.slide+1})
  }
  prev() {
    this.setState({slide: this.state.slide-1})
  }
  componentDidUpdate() {
    if (React.Children.count(this.props.children) == this.state.slide+1 && !this.state.end ) {
      this.setState({end:true})
      this.props.onComplete();
    }
  }

  render() {
    const { children, className, tag } = this.props;
    let c = "Slider " + (className?className:'');
    return (
      <div className={c}>{children[this.state.slide]}</div>
    );
  };
};

Slider.defaultProps = {
  target: '_self',
  disabled: false,
  onComplete: function functionName() {}
};

export default Slider;
