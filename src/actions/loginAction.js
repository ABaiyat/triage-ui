import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAILURE,
  USER_LOGIN_SUCCESS,
} from '../constants/actionTypes';

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

const loginAttempt = user => (dispatch) => {
  const url = 'placeholder';
  dispatch(loginRequest());
  fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
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
