import React from 'react';
import Carousel from '../Components/Carousel/Carousel';


class Contact extends React.Component {
  render() {
    let containerStyle = {
      width:50 + '%',
      height: 50 + '%',
      margin: 'auto'
    }
    return (
      <div style={containerStyle}>
        <Carousel sliderArr={[1,2,3]} />
      </div>
    );
  }
}

export default Contact;
