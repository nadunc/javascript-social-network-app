import axios from 'axios';
import * as config from './config';
import {
  GET_ALL_USERS_SUCCESS, GET_ALL_USERS_ERROR,
  CHANGE_USER_SUCCESS, CHANGE_USER_ERROR
} from '../reducers/types';
import {messages} from './messages';

export function getUsers() {
  return function(dispatch) {
    axios.get(config.backendUrl + '/users').then((res) => {
      dispatch({type: GET_ALL_USERS_SUCCESS, payload: res.data.data});
    }).catch((error) => {
      dispatch({type: GET_ALL_USERS_ERROR, payload: messages.USER_FETCHING_ERROR});
    });
  }
}

export function selectUser(user) {
  return function(dispatch) {
    if (user) {
      dispatch({type: CHANGE_USER_SUCCESS, payload: user});
    } else {
      dispatch({type: CHANGE_USER_ERROR, payload: messages.USER_CHANGE_ERROR});
    }
  }
}
