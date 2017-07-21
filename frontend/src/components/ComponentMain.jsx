import React, {Component} from 'react';
import ComponentPostContainer from './ComponentPostContainer';
import ComponentPostForm from './ComponentPostForm';
import axios from 'axios';
import userImg from '../user.png';
import {connect} from 'react-redux';

import * as UserActions from '../actions/userActions';
import * as PostActions from '../actions/postActions';
import * as CommentActions from '../actions/commentActions';
import * as LikeActions from '../actions/likeActions';

import * as config from '../actions/config';
import {messages} from '../actions/messages';

class ComponentMain extends Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      users: [],
      user: {
        _id: null,
        firstName: null,
        lastName: null
      }
    };

    // this.backendUrl = "http://localhost:5000/api";
    // this.backendUrl = "http://"+window.location.hostname+":5000/api";
    this.backendUrl = config.backendUrl;

  }

  componentWillMount() {
    this.props.dispatch(UserActions.getUsers());
    this.props.dispatch(PostActions.getPosts());
  }

  componentWillReceiveProps(nextProps) {
    this.setState({posts: nextProps.posts, users: nextProps.users, user: nextProps.user});
  }

  addPost = (post) => {
    if (this.state.user._id === null) {
      alert(messages.PLEASE_SELECT_USER);
      return;
    }

    this.props.dispatch(PostActions.addPost(post, this.state.user));
  }

  deletePost = (postId) => {
    this.props.dispatch(PostActions.deletePost(postId));
  }

  addComment = (postId, comment) => {
    if (this.state.user._id === null) {
      alert(messages.PLEASE_SELECT_USER);
      return;
    } else {
      this.props.dispatch(CommentActions.addComment(postId, comment, this.state.user._id));
    }

  }

  addLike = (postId, commentId) => {
    if (this.state.user._id === null) {
      alert(messages.PLEASE_SELECT_USER);
      return;
    } else {
      this.props.dispatch(LikeActions.addLike(postId, commentId, this.state.user._id));
    }
  }

  unlike = (postId, commentId) => {
    console.log("Not implemented");
    alert("Not implemented");
  }

  render() {
    let userList = this.state.users.map((user, i) => {
      return <a className="dropdown-item" href="#" key={i} onClick={this.props.dispatch.bind(this, UserActions.selectUser(user))}>{user.firstName} {user.lastName}</a>
    });

    return (
      <div>
        <nav className="navbar navbar-toggleable-md fixed-top navbar-inverse bg-avo">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#main-nav" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="container">
            <a className="navbar-brand" href="#">
              <h4>Avobook</h4>
            </a>
            <div className="collapse navbar-collapse" id="main-nav">
              <ul className="navbar-nav ml-auto">

                <li className="nav-item dropdown pull-xs-right">
                  <a className="nav-link dropdown-toggle p-0" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="nav-user-name">{this.state.user.firstName} {this.state.user.lastName}</span>
                    <img className="img-fluid nav-user-img" src={userImg} alt="User Image"/>
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    {userList}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        { this.state.user._id == null && <div className="empty-user text-center">Please add new user to database</div>}
        <div className="container">
          <div className="row">
            <div className="col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 post-app">
              <ComponentPostForm addPost={this.addPost}/>
              <ComponentPostContainer posts={this.state.posts} deletePost={this.deletePost} addComment={this.addComment} addLike={this.addLike} unlike={this.unlike} user={this.state.user}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {users: state.users.users, user: state.users.user, posts: state.posts.posts};
}

export default connect(mapStateToProps)(ComponentMain);
