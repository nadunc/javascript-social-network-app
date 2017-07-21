import axios from 'axios';
import * as config from './config';
import {
  GET_ALL_POSTS_SUCCESS, GET_ALL_POSTS_ERROR,
  ADD_POST_SUCCESS, ADD_POST_ERROR,
  DELETE_POST_SUCCESS, DELETE_POST_ERROR
} from '../reducers/types';
import {messages} from './messages';


export function getPosts() {
  return function(dispatch) {
    axios.get(config.backendUrl + '/posts').then((res) => {
      dispatch({type: GET_ALL_POSTS_SUCCESS, payload: res.data.data});
    }).catch((error) => {
      dispatch({type: GET_ALL_POSTS_ERROR, payload: messages.POSTS_FETCHING_ERROR});
    });
  }
}

export function addPost(post, userId) {
  return function(dispatch) {

    
    post.user = userId;

    axios.post(config.backendUrl + '/posts', post).then((res) => {
      dispatch({type: ADD_POST_SUCCESS, payload: res.data.data});
    }).catch((error)=>{
      dispatch({type: ADD_POST_ERROR, payload: messages.POST_ADD_ERROR});
    });
  }

}

export function deletePost(postId) {
  return function (dispatch) {
    let x = window.confirm(messages.CONFIRM_DELETE);

    if (x === true) {
      axios.delete(config.backendUrl + '/posts/' + postId).then((res) => {
        dispatch({type: DELETE_POST_SUCCESS, payload:postId});
      }).catch((error)=>{
      });
      dispatch({type: DELETE_POST_ERROR, payload:messages.POST_DELETE_ERROR});
    }
  }
}
