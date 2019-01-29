import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAILURE,
  USER_REGISTER_SUCCESS,
} from '../constants/actionTypes';

import url from '../constants/urlPaths';

const registerRequest = () => ({
  type: USER_REGISTER_REQUEST,
});

const registerFailure = error => ({
  type: USER_REGISTER_FAILURE,
  error,
});

const registerSuccess = user => ({
  type: USER_REGISTER_SUCCESS,
  user,
});

const registerAttempt = userObj => (dispatch) => {
  const registerUrl = `${url}/users`;
  dispatch(registerRequest());
  const user = {
    name: userObj.name,
    username: userObj.username,
    email: userObj.email,
    password: userObj.password,
  };
  fetch(registerUrl, {
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
      dispatch(registerSuccess(json));
    })
    .catch((err) => {
      dispatch(registerFailure(err));
    });
};

export default registerAttempt;
