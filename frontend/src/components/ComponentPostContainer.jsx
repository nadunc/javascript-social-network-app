import React, {Component} from 'react';
import ComponentPost from './ComponentPost';

class ComponentPostContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    let posts = this.props.posts.sort((a,b)=>{return new Date(b.createdDateTime).getTime() - new Date(a.createdDateTime).getTime()}).map((post, i) => {
     return <ComponentPost post={post} key={i} deletePost={this.props.deletePost} addComment={this.props.addComment}
          addLike={this.props.addLike} unlike={this.props.unlike} user={this.props.user}/>
    });

    return (
      <div className="post-container">
          {posts}
      </div>
    );
  }
}

export default ComponentPostContainer;
