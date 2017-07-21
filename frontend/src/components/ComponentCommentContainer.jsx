import React, {Component} from 'react';
import ComponentComment from './ComponentComment';
import ComponentCommentForm from './ComponentCommentForm';


class ComponentCommentContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let comments = this.props.comments.map((comment, i) => {
      return <ComponentComment key={i} comment={comment} addLike={this.props.addLike} unlike={this.props.unlike} user={this.props.user}/>;
    });

    return (
      <div className="comment-container">
          {comments}
          <ComponentCommentForm addComment={this.props.addComment}/>
      </div>
    );
  }
}

export default ComponentCommentContainer;
