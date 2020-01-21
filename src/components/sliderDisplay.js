import React, { Component } from 'react';
import { Button } from "../index.js"

class SliderDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: this.props.slide,
      complete: false
    }
  }
  // changeSlide(e) {
  //   if (this.props.clickable) {
  //     this.setState({'slide': Number(e.target.innerHTML)})
  //   }
  // }
  componentDidMount(){
    // this.update()
  }
  update() {
    // clearTimeout(this.timer);
    // var t = this;
    // if (this.props.interval) {
    //   if (this.state.slide < this.props.count) {
    //     this.timer = setInterval(function() {
    //       t.props.onChange(t.state.slide+1)
    //       t.setState({'slide': t.state.slide+1});
    //     },this.props.interval*1000);
    //   } else {
    //     clearTimeout(this.timer);
    //   }
    // }
  }
  componentDidUpdate() {
    // this.update()
    // if (this.state.slide >= this.props.count-1 && !this.state.complete) {
    //   clearTimeout(this.timer);
    //   this.setState({"complete": true})
    //   // var t = this;
    //   // this.timer = setInterval(function() {
    //   //   t.props.onComplete();
    //   // },this.props.interval*1000);
    // }
    //
    // if (this.state.slide > this.props.count-1) {
    //   clearTimeout(this.timer);
    // }
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const { className, sliderRef, count } = this.props;
    let c = "Slider-display " + (className?className:'');
    var indents = [];
    for (var i = 0; i < this.props.count; i++) {
      indents.push(<div className={this.props.slide >= i?'slider-display-item active':'slider-display-item'} key={i}><span style={{animationDuration: this.props.interval+'s'}}></span></div>);
    }

    return (
      <div className={c}>
        {indents}
      </div>
    );
  };
};

SliderDisplay.defaultProps = {
  sliderRef: '_self',
  count: 4,
  clickable: false,
  slide:0,
  interval:0,
  onChange: function functionName() {},
  onComplete: function functionName() {}
};

export default SliderDisplay;
