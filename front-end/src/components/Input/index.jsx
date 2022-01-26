import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ testId, value, handleChange, type, placeholder }) => (
  <input
    dataTestId={ testId }
    value={ value }
    onChange={ handleChange }
    type={ type }
    placeholder={ placeholder }
  />
);

Input.propTypes = {
  testId: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
