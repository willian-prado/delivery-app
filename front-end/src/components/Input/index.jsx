import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ dataTestId, value, handleChange, type, placeholder }) => (
  <input
    data-testid={dataTestId}
    value={value}
    onChange={handleChange}
    type={type}
    placeholder={placeholder}
  />
);

Input.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
