import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAILURE,
  USER_LOGIN_SUCCESS,
} from '../constants/actionTypes';

import url from '../constants/urlPaths';

const loginRequest = () => ({
  type: USER_LOGIN_REQUEST,
});

const loginFailure = error => ({
  type: USER_LOGIN_FAILURE,
  error,
});

const loginSuccess = user => ({
  type: USER_LOGIN_SUCCESS,
  user,
});

const loginAttempt = userObj => (dispatch) => {
  const loginUrl = `${url}/users/login`;
  dispatch(loginRequest());
  const user = {
    email: userObj.email,
    password: userObj.password,
  };
  fetch(loginUrl, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Request-Method': 'POST',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then(response => response.json())
    .then((json) => {
      dispatch(loginSuccess(json));
    })
    .catch((err) => {
      dispatch(loginFailure(err));
    });
};

export default loginAttempt;
