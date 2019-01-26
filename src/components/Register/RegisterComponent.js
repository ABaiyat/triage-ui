import React from 'react';
import {
  Button, Form, Grid, Header, Message, Segment,
} from 'semantic-ui-react';
import './Register.less';


const Register = () => (
  <div className="registerForm">
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column className="registerContainer">
        <Header color="blue">Create a new account</Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user outline"
              iconPosition="left"
              placeholder="Name"
            />
            <Form.Input
              fluid
              icon="at"
              iconPosition="left"
              placeholder="Email"
            />
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

export default Register;
