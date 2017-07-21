import {GET_ALL_USERS_SUCCESS, GET_ALL_USERS_ERROR, CHANGE_USER_SUCCESS, CHANGE_USER_ERROR} from './types';

var initialState = {
  users: [],
  user: {
    _id: null,
    firstName: null,
    lastName: null
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_USERS_SUCCESS:
      if (action.payload.length > 0) {
        return {...state, users: action.payload, user: action.payload[0]};
      } else {
        return {...state, users: action.payload};
      }
      break;

    case GET_ALL_USERS_ERROR:
      return {...state, error:action.payload};
      break;

    case CHANGE_USER_SUCCESS:
      return {...state, user: action.payload};
      break;

    case CHANGE_USER_ERROR:
      return {...state, error: action.payload};
      break;

    default:
  }
  return state;
}
