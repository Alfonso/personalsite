import React from 'react';
import Carousel from '../Components/Carousel/Carousel';
import ImgComp from '../Components/Carousel/ImgComp';
import i1 from '../Images/Pearson.png';
import i2 from '../Images/Audible.jpg';

class Work extends React.Component {
  render() {
    let containerStyle = {
      width:50 + '%',
      height: 50 + '%',
      margin: 'auto'
    }
    return (
      <div style={containerStyle}>
        <Carousel sliderArr={[<ImgComp src={i1} />,<ImgComp src={i2} />]} />
      </div>
    )
  }
}

export default Work;
