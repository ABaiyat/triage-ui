import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import registerAttempt from '../../actions/registerAction';
import RegisterComponent from './RegisterComponent';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  onSubmit: user => dispatch(registerAttempt(user)),
});

const formConfiguration = {
  form: 'RegisterForm',
};

const ContainerWithProps = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterComponent);

const RegisterContainer = reduxForm(formConfiguration)(ContainerWithProps);

export default RegisterContainer;
