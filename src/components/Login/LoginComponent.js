import React from 'react';
import {
  Button, Form, Grid, Header, Message, Segment,
} from 'semantic-ui-react';
import './Login.less';

const LoginComponent = () => (
  <div className="loginForm">
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column className="loginContainer">
        <Header color="blue">Log-in to your account</Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Username"
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />
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

export default LoginComponent;
