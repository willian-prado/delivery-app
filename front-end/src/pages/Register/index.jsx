import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import dataTestIds from '../../dataTestIds';
import verifyRegister from '../../helpers/verifyRegister';
import addUserToLocalStorage from '../../helpers/addUserToLocalStorage';

const Register = () => {
  const navigate = useNavigate();
  const [registerForm, setRegisterForm] = React.useState({
    name: '',
    email: '',
    password: '',
    role: 'customer',
  });
  const [warning, setWarning] = React.useState('');

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setWarning('');
    setRegisterForm({ ...registerForm, [name]: value });
  };

  const disableButton = () => {
    const { name, email, password } = registerForm;
    return (!verifyRegister(name, email, password));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const URL = 'http://localhost:3001/user';
      const response = await axios.post(URL, registerForm);
      const { token } = response.data;
      addUserToLocalStorage(registerForm, token);
      navigate('/customer/products');
    } catch (error) {
      const { message } = error.response.data;
      setWarning(message);
      const timeout = 5000;
      setTimeout(() => {
        setWarning('');
      }, timeout);
    }
  };

  return (
    <div>
      <h1>Cadastro</h1>
      <form onSubmit={ handleSubmit }>
        <input
          type="text"
          data-testid={ dataTestIds[6] }
          value={ registerForm.name }
          name="name"
          onChange={ handleChange }
        />
        <input
          type="email"
          data-testid={ dataTestIds[7] }
          value={ registerForm.email }
          name="email"
          onChange={ handleChange }
        />
        <input
          type="password"
          data-testid={ dataTestIds[8] }
          value={ registerForm.password }
          name="password"
          onChange={ handleChange }
        />
        <button
          type="submit"
          data-testid={ dataTestIds[9] }
          disabled={ disableButton() }
        >
          CADASTRAR
        </button>
      </form>
      { warning && <div data-testid={ dataTestIds[10] }>{ warning }</div> }
    </div>
  );
};

export default Register;
