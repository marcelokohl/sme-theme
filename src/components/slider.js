import React, { Component } from 'react';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: 0,
      end: false
    }
  }
  // go(i) {
  //   this.setState({'slide': i})
  //   // this.props.onChange(this.state.slide)
  // }
  // next() {
  //   this.props.onChange(this.state.slide+1)
  //   // this.setState({'slide': this.state.slide+1})
  // }
  // prev() {
  //   this.setState({'slide': this.state.slide-1})
  //   // this.props.onChange(this.state.slide)
  // }
  componentWillReceiveProps(nextProps){
    this.setState({'slide': nextProps.slide})
      // alert();
  }
  componentDidUpdate() {
    // alert(this.state.slide)
    if (React.Children.count(this.props.children) == this.state.slide+1 && !this.state.end ) {
      this.setState({'end':true})
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
  onComplete: function functionName() {},
  onChange: function functionName() {}
};

export default Slider;
