import {
  GET_ALL_POSTS_SUCCESS,
  GET_ALL_POSTS_ERROR,
  ADD_POST_SUCCESS,
  ADD_POST_ERROR,
  DELETE_POST_SUCCESS,
  DELETE_POST_ERROR,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_ERROR,
  ADD_LIKE_SUCCESS,
  ADD_LIKE_ERROR
} from './types';

var initialState = {
  posts: []
}

export default function reducer(state = initialState, action) {
  let postId = null;
  let posts = [];
  let post = null;
  let index = null;

  switch (action.type) {
    case GET_ALL_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload
      };
      break;

    case ADD_POST_SUCCESS:
      return Object.assign({}, state, {
        posts: [
          ...state.posts,
          action.payload
        ]
      });
      break;

    case DELETE_POST_SUCCESS:
      postId = action.payload;
      posts = [];
      state.posts.map((post, i) => {
        if (postId != post._id) {
          posts.push(post);
        }
      });
      return Object.assign({}, state, {posts: posts});

      break;

    case ADD_COMMENT_SUCCESS:
      post = action.payload;
      posts = state.posts.slice(0);
      index = posts.findIndex((p, index) => {
        return p._id === post._id;
      });

      posts[index] = post;

      return Object.assign({}, state, {posts: posts});
      break;

    case ADD_LIKE_SUCCESS:
      post = action.payload;
      posts = state.posts.slice(0);
      index = posts.findIndex((p, index) => {
        return p._id === post._id;
      });
      posts[index] = post;

      return Object.assign({}, state, {posts: posts});
      break;

    default:
  }
  return state;
}
