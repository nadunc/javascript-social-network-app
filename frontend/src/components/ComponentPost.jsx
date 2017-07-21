import React, {Component} from 'react';
import ComponentCommentContainer from './ComponentCommentContainer';
import * as moment from 'moment';

class ComponentPost extends Component {

  constructor(props) {
    super(props);
  }

  // convert timestamp into "Today at 1:04 PM" format
  formatDate = (createdDateTime) => {
    return moment(new Date(createdDateTime).getTime()).calendar();
  }

  addComment = (comment)=>{
    this.props.addComment(this.props.post._id, comment);
  }

  addLike = (commentId) =>{
    this.props.addLike(this.props.post._id, commentId);
  }

  unlike = (commentId) =>{
    this.props.unlike(this.props.post_id, commentId);
  }

  render() {
    return (
      <div className="card post">
          <div className="card-block">
            <div className="post-delete-btn" onClick={this.props.deletePost.bind(this, this.props.post._id)}>x</div>
            <p className="card-title post-user">{this.props.post.user.firstName} {this.props.post.user.lastName}</p>
            <p className="card-subtitle mb-2 post-date">{this.formatDate(this.props.post.createdDateTime)}</p>
            <p className="card-text post-text">{this.props.post.text}</p>
          </div>
        <ComponentCommentContainer comments={this.props.post.comments} addComment={this.addComment} addLike={this.addLike} unlike={this.unlike} user={this.props.user}/>
      </div>
    );
  }
}

export default ComponentPost;
