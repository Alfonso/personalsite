import React from 'react';
import './imgcomp.css';

class ImgComp extends React.Component {
  constructor(props){
    super(props);
    // bind functions
    this.setWobble = this.setWobble.bind(this);

    this.state={
      wobble: 0
    }
  }

  setWobble(val){
    this.setState({
      wobble: val
    });
  }

  render(){
    return <img className={this.props.hidden ? "hiddenImage" : "animateImage"} src={this.props.src} alt="slide-img" onAnimationEnd={this.props.renderFunction} wobble={this.state.wobble}></img>;
  }
}

export default ImgComp;
