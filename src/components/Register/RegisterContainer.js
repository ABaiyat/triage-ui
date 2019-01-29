import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import RegisterComponent from './RegisterComponent';

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({
  onSubmit: data => data,
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
