import React from 'react';
import Carousel from '../Components/Carousel/Carousel';
import ImgComp from '../Components/Carousel/ImgComp';
import i1 from '../Images/Me.png';
import i2 from '../Images/MeAndAli.png';


class Projects extends React.Component {
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

export default Projects;
