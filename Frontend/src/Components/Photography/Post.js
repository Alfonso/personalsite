import React from 'react';
import { Link } from 'react-router-dom';


import './post.css';

class Post extends React.Component{

  constructor(props){
    super(props);
  }

  render(){

    return(
      <div className="postContainer">
        <img src={this.props.image} alt="post"></img>
        <div style={{width:50 + "%", margin: "auto"}}>
          <h1>{this.props.title}</h1>
          <h2>{this.props.date}</h2>
          <p>{this.props.description}</p>
        </div>
        <Link className="postButton" to={"/"+this.props.title.replace(" ","-").toLowerCase()}>Read More</Link>
        <hr/>
      </div>
    );
  }
}

export default Post;
