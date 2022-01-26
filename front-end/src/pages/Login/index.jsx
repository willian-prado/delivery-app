import React from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import dataTestIds from '../../dataTestIds';
import verifyLogin from '../../helpers/verifyLogin';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const disableButton = () => (!verifyLogin(email, password));

  return (
    <main>
      <h1>Login</h1>
      <form
        onSubmit={ (event) => {
          event.preventDefault();

          const user = { email, password };

          axios.post('https://localhost:3001/login', { user })
            .then((res) => {
              console.log(res);
              console.log(res.data);
            });
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
          disabled={ disableButton() }
        >
          Login
        </Button>
      </form>
    </main>
  );
};
export default Login;
