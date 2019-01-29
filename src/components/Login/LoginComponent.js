import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Form, Grid, Header, Message, Segment,
} from 'semantic-ui-react';
import { Field } from 'redux-form';
import WrappedInput from '../WrappedInput/WrappedInput';
import './Login.less';

const LoginComponent = (props) => {
  const { handleSubmit, onSubmit } = props;
  return (
    <div className="loginForm">
      <Grid textAlign="center" verticalAlign="middle">
        <Grid.Column className="loginContainer">
          <Header color="blue">Log-in to your account</Header>
          <Form size="large" onSubmit={handleSubmit(onSubmit)}>
            <Segment stacked>
              <Form.Field>
                <Field
                  name="username"
                  icon="users"
                  placeholder="Username"
                  component={WrappedInput}
                />
              </Form.Field>
              <Form.Field>
                <Field
                  type="password"
                  name="password"
                  icon="lock"
                  placeholder="Password"
                  component={WrappedInput}
                />
              </Form.Field>
              <Button color="blue" fluid size="large">Login</Button>
            </Segment>
          </Form>
          <Message>
          Need an account?
            {' '}
            <a href="/register">Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  );
};

LoginComponent.propTypes = {
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func,
};

LoginComponent.defaultProps = {
  handleSubmit: () => {},
  onSubmit: () => {},
};

export default LoginComponent;
