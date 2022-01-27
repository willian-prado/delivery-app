import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import dataTestIds from '../../dataTestIds';
import verifyLogin from '../../helpers/verifyLogin';
import axiosPost from '../../helpers/axios';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [userNotFound, setUserNotFound] = React.useState(false);
  const isButtonDisabled = () => (!verifyLogin(email, password));

  const routes = {
    customer: '/customer/products',
    seller: '/seller/orders',
    admin: '/admin/manage',
  };

  return (
    <main>
      <h1>Login</h1>
      <form
        onSubmit={ async (event) => {
          event.preventDefault();
          const URL = 'http://localhost:3001/login';
          const newUser = { email, password };

          try {
            const user = await axiosPost(URL, newUser);

            navigate(routes[user.role]);
          } catch (err) {
            setUserNotFound(true);
          }
        } }
      >
        <Input
          dataTestId={ dataTestIds[1] }
          value={ email }
          handleChange={ (event) => setEmail(event.target.value) }
          type="text"
        />
        <Input
          dataTestId={ dataTestIds[2] }
          value={ password }
          handleChange={ (event) => setPassword(event.target.value) }
          type="password"
        />

        <Button
          dataTestId={ dataTestIds[3] }
          submit
          disabled={ isButtonDisabled() }
        >
          Login
        </Button>
        <Button
          dataTestId={ dataTestIds[4] }
          handleClick={ () => navigate('/register') }
        >
          Ainda não tenho conta
        </Button>
      </form>

      { userNotFound && (
        <p data-testid={ dataTestIds[5] }>User not found</p>
      ) }
    </main>
  );
};
export default Login;
