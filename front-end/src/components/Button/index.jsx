import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, dataTestId, handleClick, submit, disabled }) => (
  <button
    data-testid={dataTestId}
    onClick={handleClick}
    type={submit ? 'submit' : 'button'}
    disabled={disabled}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  dataTestId: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  submit: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Button;
