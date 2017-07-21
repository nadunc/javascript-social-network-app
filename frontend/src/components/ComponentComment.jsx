import React, {Component} from 'react';
import userImg from '../user.png';
import likeImg from '../like.png';
import * as moment from 'moment';

class ComponentCommentContainer extends Component {
  constructor(props) {
    super(props);
  }

  // convert timestamp into "Today at 1:04 PM" format
  formatDate = (createdDateTime) => {
    return moment(new Date(createdDateTime).getTime()).calendar();
  }

  addLike = (commentId) => {
    this.props.addLike(commentId);
  }

  unlike = (commentId) => {
    this.props.unlike(commentId);
  }

  render() {
    let index = this.props.comment.likes.findIndex((like, index) => {
      return like.user == this.props.user._id;

    });

    let like = <p className="like">
      <span className="like-unlike" onClick={this.unlike.bind(this, this.props.comment._id)}>Unlike</span>
      <span className="total-likes"><img src={likeImg}/>{this.props.comment.likes.length}</span>
    </p>;

    if (index == -1) {
      like = <p className="like">
        <span className="like-unlike" onClick={this.addLike.bind(this, this.props.comment._id)}>Like</span>
        { this.props.comment.likes.length>0 && <span className="total-likes"><img src={likeImg}/>{this.props.comment.likes.length}</span>}
      </p>;
    }

    return (
      <div className="card comment">
        <div className="card-block">
          <div className="row">
            <div className="col-2 col-sm-2 col-md-2 col-lg-2 comment-user-img">
              <img className="img-fluid" src={userImg} alt="user image"/>
            </div>
            <div className="col-10 col-sm-10 col-md-10 col-lg-10">

              <p className="card-title comment-user">{this.props.comment.user.firstName} {this.props.comment.user.lastName}</p>
              <p className="card-subtitle comment-date">{this.formatDate(this.props.comment.createdDateTime)}</p>
              <p className="card-text comment-text">{this.props.comment.text}</p>
              {like}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ComponentCommentContainer;
