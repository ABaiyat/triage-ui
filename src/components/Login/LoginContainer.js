import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import loginAttempt from '../../actions/loginAction';
import LoginComponent from './LoginComponent';

const mapStateToProps = state => ({
  isFetching: state.isFetching,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: user => dispatch(loginAttempt(user)),
});

const formConfiguration = {
  form: 'loginForm',
};

const ContainerWithProps = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginComponent);

const LoginContainer = reduxForm(formConfiguration)(ContainerWithProps);

export default LoginContainer;
