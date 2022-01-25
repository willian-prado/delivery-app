const jwt = require('jsonwebtoken');
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
  const checkUser = await checkUserExistence({ email, password });
  if (checkUser === null) {
    const message = 'Invalid fields';
    throw new Error(message);
  }

  const id = { id: checkUser.id };
  const token = jwt.sign(id, secretPassword, jwtConfig);
  return { token };
};

module.exports = {
  createNewLogin,
};
