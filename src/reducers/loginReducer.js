import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAILURE,
  USER_LOGIN_SUCCESS,
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        isFetching: true,
      };
    case USER_LOGIN_FAILURE:
      return {
        isFetching: false,
        error: action.error,
      };
    case USER_LOGIN_SUCCESS:
      return {
        isFetching: false,
        user: action.user,
      };
    default:
      return state;
  }
};
