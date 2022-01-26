import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, dataTestId, submit, disabled }) => (
  <button
    dataTestId={ dataTestId }
    type={ submit ? 'submit' : 'button' }
    disabled={ disabled }
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  dataTestId: PropTypes.string.isRequired,
  submit: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Button;
