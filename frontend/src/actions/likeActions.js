import axios from 'axios';
import * as config from './config';
import { ADD_LIKE_SUCCESS, ADD_LIKE_ERROR } from '../reducers/types';
import {messages} from './messages';

export function addLike(postId, commentId, userId) {
    return function (dispatch) {
        axios.post(config.backendUrl + '/posts/' + postId + '/comments/' + commentId + '/likes', { user: userId }).then((res) => {
            dispatch({type: ADD_LIKE_SUCCESS, payload: res.data.data});
        }).catch((error)=>{
          dispatch({type: ADD_LIKE_ERROR, payload: messages.LIKE_ADD_ERROR});
        });
    }
}
