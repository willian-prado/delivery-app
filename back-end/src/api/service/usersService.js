const jwt = require('jsonwebtoken');
const { User } = require('../../database/models/index');

const jwtConfig = {
  expiresIn: '20d',
  algorithm: 'HS256',
};

const secretPassword = 'secret_key';

const checkEmailExistence = async (email) => User.findOne({
  where: { email },
});

const creatNewUser = async ({ displayName, email, password, image }) => {
  const checkEmail = await checkEmailExistence(email);
  if (checkEmail !== null) {
    const message = 'User already registered';
    throw new Error(message);
  }
  const user = await User.create({ displayName, email, password, image });
  const token = jwt.sign(user.dataValues, secretPassword, jwtConfig);
  return { token };
};

module.exports = {
  creatNewUser,
};
