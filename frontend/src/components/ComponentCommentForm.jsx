import React, {Component} from 'react';

class ComponentAddComment extends Component{
  constructor(props){
    super(props);
  }

  addComment= (e)=>{
    if(e.keyCode === 13){
      let comment = this.refs.commentBox.value;
      this.props.addComment(comment);
      this.refs.commentBox.value = "";
    }
  }

  render(){
    return(
      <div className="card comment">
        <div className="card-block">
          <div className="row">
            <div className="col-md-1 comment-user-img">
              {/* <img className="img-fluid" src={userImg} alt="user image"/> */}
            </div>
            <div className="col-md-11">
              <input ref="commentBox" type="text" className="form-control form-control-sm comment-write" placeholder="Write a comment" onKeyUp={this.addComment.bind(this)}/>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ComponentAddComment;
