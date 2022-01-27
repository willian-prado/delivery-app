import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import dataTestIds from '../../dataTestIds';
import verifyRegister from '../../helpers/verifyRegister';

const Register = () => {
  const navigate = useNavigate();
  const [registerForm, setRegisterForm] = React.useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
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
      console.log(response);
      navigate('/customer/products');
    } catch (error) {
      console.log(error.response.message);
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
    </div>
  );
};

export default Register;
