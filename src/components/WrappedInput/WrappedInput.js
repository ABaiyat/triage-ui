import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';

const WrappedInput = (props) => {
  const {
    type, placeholder, icon, ...input
  } = props;
  return (
    <Input
      type={type}
      {...input}
      placeholder={placeholder}
      iconPosition="left"
      icon={icon}
    />
  );
};

WrappedInput.defaultProps = {
  type: '',
};

WrappedInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default WrappedInput;
