import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Form, Grid, Header, Message, Segment,
} from 'semantic-ui-react';
import { Field } from 'redux-form';
import WrappedInput from '../WrappedInput/WrappedInput';
import './Register.less';


const RegisterComponent = (props) => {
  const { handleSubmit, onSubmit } = props;
  return (
    <div className="registerForm">
      <Grid textAlign="center" verticalAlign="middle">
        <Grid.Column className="registerContainer">
          <Header color="blue">Create a new account</Header>
          <Form size="large" onSubmit={handleSubmit(onSubmit)}>
            <Segment stacked>
              <Form.Field>
                <Field
                  name="name"
                  icon="user outline"
                  iconPosition="left"
                  placeholder="Name"
                  component={WrappedInput}
                />
              </Form.Field>
              <Form.Field>
                <Field
                  name="email"
                  icon="at"
                  iconPosition="left"
                  placeholder="Email"
                  component={WrappedInput}
                />
              </Form.Field>
              <Form.Field>
                <Field
                  name="username"
                  icon="user"
                  placeholder="Username"
                  component={WrappedInput}
                />
              </Form.Field>
              <Form.Field>
                <Field
                  name="password"
                  icon="lock"
                  placeholder="Password"
                  type="password"
                  component={WrappedInput}
                />
              </Form.Field>
              <Button color="blue" fluid size="large">Register</Button>
            </Segment>
          </Form>
          <Message>
          Already have an account?
            {' '}
            <a href="/login">Log-in</a>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  );
};

RegisterComponent.propTypes = {
  handleSubmit: PropTypes.func,
  onSubmit: () => {},
};

RegisterComponent.defaultProps = {
  handleSubmit: () => {},
  onSubmit: () => {},
};

export default RegisterComponent;
