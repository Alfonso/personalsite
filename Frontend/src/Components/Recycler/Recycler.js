import React from 'react';
import ImgComp from './ImgComp';
import '../../Styles/recycler.css';

import CircularNode from '../../DataStructures/CircularNode';

class Recycler extends React.Component{
  constructor(props){
    super(props);
    // turn the array of images into a doubly circular linked list
    let tempMid = this.createList( this.props.sliderArr );
    // bind the two onclick functions
    this.goLeft = this.goLeft.bind(this);
    this.goRight = this.goRight.bind(this);
    // bind the render functions
    this.renderLeft = this.renderLeft.bind(this);
    this.renderRight = this.renderRight.bind(this);
    // bind references
    this.image0 = React.createRef();
    this.image1 = React.createRef();
    this.image2 = React.createRef();
    this.image3 = React.createRef();
    this.image4= React.createRef();

    this.state = {
      // pointer to the middle item
      mid: tempMid,
      transition: 0
    };
  }

  createList(arr){
    // create ptr
    let head = new CircularNode(null,null,arr[0]);
    let ptr = head;
    // loop through them
    let i = 1;
    for( i = 1;i < (arr.length - 1); i++){
      let temp = new CircularNode(null, ptr, arr[i]);
      ptr.next = temp;
      ptr = temp;
    }

    // create the tail
    CircularNode.addTail(head, arr[i]);
    ptr.next = head.prev;
    return head.next;
  }

  renderLeft(){
    this.image0.current.setWobble(0);
    this.image1.current.setWobble(0);
    this.image2.current.setWobble(0);
    this.image3.current.setWobble(0);
    this.image4.current.setWobble(0);
    this.setState({mid: this.state.mid.prev, transition: -1})
  }

  renderRight(){
    this.image0.current.setWobble(0);
    this.image1.current.setWobble(0);
    this.image2.current.setWobble(0);
    this.image3.current.setWobble(0);
    this.image4.current.setWobble(0);
    this.setState({mid: this.state.mid.next, transition: 1})
  }

  createImages(){
    if( this.state.transition === -1 ){
      return(
        <div className="imgContainerLeft">
          <ImgComp hidden={1} renderFunction={() => {}} ref={this.image4} src={this.state.mid.next.next.i} />
          <ImgComp hidden={0} renderFunction={() => {}} ref={this.image3} src={this.state.mid.next.i} />
          <ImgComp hidden={0} renderFunction={this.renderLeft} ref={this.image2} src={this.state.mid.i} />
          <ImgComp hidden={0} renderFunction={() => {}} ref={this.image1} src={this.state.mid.prev.i} />
          <ImgComp hidden={1} renderFunction={() => {}} ref={this.image0} src={this.state.mid.prev.prev.i} />
        </div>
      )
    }else{
      return(
        <div className="imgContainerRight">
          <ImgComp hidden={1} renderFunction={() => {}} ref={this.image0} src={this.state.mid.prev.prev.i} />
          <ImgComp hidden={0} renderFunction={() => {}} ref={this.image1} src={this.state.mid.prev.i} />
          <ImgComp hidden={0} renderFunction={this.renderRight} ref={this.image2} src={this.state.mid.i} />
          <ImgComp hidden={0} renderFunction={() => {}} ref={this.image3} src={this.state.mid.next.i} />
          <ImgComp hidden={1} renderFunction={() => {}} ref={this.image4} src={this.state.mid.next.next.i} />
        </div>
      )
    }
  }

  goLeft(){
    let oldTransition = this.state.transition;
    this.setState({
      mid: this.state.mid,
      transition: -1
    })
    //console.log("left: "+ oldTransition)
    // we have clicked the same direction twice
    if( oldTransition === -1 ){
      this.image0.current.setWobble(-1);
      this.image1.current.setWobble(-1);
      this.image2.current.setWobble(-1);
      this.image3.current.setWobble(-1);
    }else{
      this.image4.current.setWobble(-1);
      this.image3.current.setWobble(-1);
      this.image2.current.setWobble(-1);
      this.image1.current.setWobble(-1);
    }
  }
  goRight(){
    let oldTransition = this.state.transition;
    this.setState({
      mid: this.state.mid,
      transition: 1
    })
    //console.log("right: " + oldTransition)
    if( (oldTransition === 1 || oldTransition === 0) ){
      this.image1.current.setWobble(1);
      this.image2.current.setWobble(1);
      this.image3.current.setWobble(1);
      this.image4.current.setWobble(1);
    }else{
      this.image0.current.setWobble(1);
      this.image1.current.setWobble(1);
      this.image2.current.setWobble(1);
      this.image3.current.setWobble(1);
    }
  }

  render(){
    return (
      <div className="recycler">

        {this.createImages()}

        <div className='buttonContainer'>
          <button className='buttonStyle' onClick={this.goLeft}>
            <i className="fas fa-arrow-left"></i>
          </button>
          <button className='buttonStyle' onClick={this.goRight}>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Recycler;
