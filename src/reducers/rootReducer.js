import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import simpleReducer from './simpleReducer';
import loginReducer from './loginReducer';

export default combineReducers({
  form: formReducer,
  simpleReducer,
  loginReducer,
});
