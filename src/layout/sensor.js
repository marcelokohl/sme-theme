import React from 'react';

class Sensor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      oneshot: false
    }
    this.myRef = React.createRef();
    const t = this;
    window.addEventListener('scroll', function(){
      if (t.state.visible) t.setState({oneshot: true})
      if (t.state.oneshot) return
      t.setState({visible: t.checkView()})
    }, true)
  }

  checkView() {
  	var bounds = this.myRef.current.getBoundingClientRect();
  	return bounds.top < window.innerHeight && bounds.bottom > 0;
  }

  render() {
    const { children, oneshot } = this.props;
    return (
      <div ref={this.myRef} className={'Sensor' + (this.state.visible?' visible':'')}>{children}</div>
    );
  };
};

export default Sensor;
