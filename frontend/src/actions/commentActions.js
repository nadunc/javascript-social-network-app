import axios from 'axios';
import * as config from './config';
import { ADD_COMMENT_SUCCESS, ADD_COMMENT_ERROR } from '../reducers/types';
import {messages} from './messages';

export function addComment(postId, comment, userId) {
    return function (dispatch) {
        
        axios.post(config.backendUrl + '/posts/' + postId + '/comments', {
            user: userId,
            text: comment
        }).then((res) => {
            dispatch({type: ADD_COMMENT_SUCCESS, payload: res.data.data});
        }).catch((error)=>{
          dispatch({type: ADD_COMMENT_ERROR, payload: messages.COMMENT_ADD_ERROR});
        });
    }
}
