const jwt = require('jsonwebtoken');
const md5 = require('md5');
const { User } = require('../../database/models/index');

const jwtConfig = {
  expiresIn: '20d',
  algorithm: 'HS256',
};

const secretPassword = 'secret_key';

const checkUserExistence = async ({ email, password }) => User.findOne({
  where: { email, password },
});

const createNewLogin = async ({ email, password }) => {
  const newPassword = md5(password);
  const checkUser = await checkUserExistence({ email, password: newPassword });
  if (checkUser === null) {
    const message = 'Invalid fields';
    throw new Error(message);
  }
  const user = { 
    id: checkUser.id, role: checkUser.role, name: checkUser.name, email: checkUser.email,
  };
  const token = jwt.sign(user, secretPassword, jwtConfig);
  return { token };
};

module.exports = {
  createNewLogin,
};
