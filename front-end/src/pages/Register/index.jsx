import React from 'react';
import datatestids from '../../dataTestIds';

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

  return (
    <div>
      <h1>Cadastro</h1>
      <form method="submit">
        <input
          type="text"
          data-testid={ datatestids[6] }
          value={ registerForm.name }
          name="name"
          onChange={ handleChange }
        />
        <input
          type="email"
          data-testid={ datatestids[7] }
          value={ registerForm.email }
          name="email"
          onChange={ handleChange }
        />
        <input
          type="password"
          data-testid={ datatestids[8] }
          value={ registerForm.password }
          name="password"
          onChange={ handleChange }
        />
        <button
          type="button"
          data-testid={ datatestids[9] }
        >
          CADASTRAR
        </button>
      </form>
    </div>
  );
};

export default Register;
