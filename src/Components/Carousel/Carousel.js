import React from 'react';
import "../../Styles/carousel.scss"

class Carousel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      x: 0
    };
  }

  render(){
    let sliderArr = this.props.sliderArr;
    const goLeft = () => {
      this.state.x === 0 ? this.setState({x:-100 * (sliderArr.length - 1)}) : this.setState({x: this.state.x + 100})
    }
    const goRight = () => {
      (this.state.x === -100 * (sliderArr.length - 1)) ? this.setState({x:0}) : this.setState({x: this.state.x - 100});
    }
    return (
      <div className="carousel">
        {
          sliderArr.map((item,index) => {
            return (
              <div key={index} className="slide" style={{transform:`translateX(${this.state.x}%)`}}>
                {item}
              </div>
            );
          })
        }
        <button id="goLeft" onClick={goLeft}>
          <i class="fas fa-arrow-left"></i>
        </button>
        <button id="goRight" onClick={goRight}>
          <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    );
  }
}

export default Carousel;
