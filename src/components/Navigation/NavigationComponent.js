import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const NavigationComponent = () => (
  <Menu>
    <Menu.Item
      name="home"
      as={Link}
      to=""
    >
    Home
    </Menu.Item>

    <Menu.Item
      position="right"
      name="login"
      as={Link}
      to="login"
    >
    Login
    </Menu.Item>

    <Menu.Item
      name="register"
      as={Link}
      to="register"
    >
    Register
    </Menu.Item>
  </Menu>

);


export default NavigationComponent;
