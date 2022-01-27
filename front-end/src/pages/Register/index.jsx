import React from 'react';
import dataTestIds from '../../dataTestIds';
import verifyRegister from '../../helpers/verifyRegister';

const Register = () => {
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

  return (
    <div>
      <h1>Cadastro</h1>
      <form method="submit">
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
          type="button"
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
