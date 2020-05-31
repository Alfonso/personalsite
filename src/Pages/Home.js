import React from 'react';
import Recycler from '../Components/Recycler/Recycler';


import i1 from '../Images/Samus.png';
import i2 from '../Images/Samus2.png';
import i3 from '../Images/Girl.png';
import i4 from '../Images/City.png';
import i5 from '../Images/Sasuke.jpg';
import i6 from '../Images/IronGiant.png';
// [i1,i2,i3,i4,i5,i6]

class Home extends React.PureComponent {
  render() {
    return (
      <Recycler sliderArr={[i1,i2,i3,i4,i5,i6]}/>
    )
  }
}

export default Home;
