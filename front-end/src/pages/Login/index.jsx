import React from 'react';
import { useNavigate } from 'react-router';
import datatestids from '../../dataTestIds';

const Login = () => {
  const navigate = useNavigate();

  const routeChange = () => {
    const path = '/register';
    navigate(path);
  };
  return (
    <main>
      <h1>Login</h1>
      <button
        type="submit"
        data-testid={ datatestids[4] }
        onClick={ routeChange }
      >
        Ainda não tenho conta
      </button>
    </main>
  );
};

export default Login;
