import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import LoginComponent from './LoginComponent';

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({
  onSubmit: data => data,
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
