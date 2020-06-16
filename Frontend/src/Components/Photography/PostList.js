import React from 'react';
import Post from './Post';

import img from '../../Images/Sasuke.jpg';

class PostList extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    let description = "this is just a test description so I can see how text is displayed. I am going to make it decently sized long so I can see if the container that it resides in either expands or goes down or what it does. I am not sure so we shall see";
    return(
      <div className="postLists">
        <Post description={description} image={img} date={"June 1st"} title={"Fourth Post"} />
        <Post description={description} image={img} date={"May 31st"} title={"Third Post"} />
        <Post description={description} image={img} date={"May 30th"} title={"Second Post"} />
        <Post description={description} image={img} date={"May 29th"} title={"First Post"} />
      </div>
    )
  }
}

export default PostList
