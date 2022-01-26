const jwt = require('jsonwebtoken');
const { User } = require('../../database/models/index');
const md5 = require('md5');

const jwtConfig = {
  expiresIn: '20d',
  algorithm: 'HS256',
};

const secretPassword = 'secret_key';

const checkEmailExistence = async (email) => User.findOne({
  where: { email },
});

const creatNewUser = async ({ name, email, password }) => {
  const checkEmail = await checkEmailExistence(email);
  if (checkEmail !== null) {
    const message = 'User already registered';
    throw new Error(message);
  }
  const newPassword = md5(password);
  const role = 'customer';
  const user = await User.create({ name, email, password: newPassword, role });
  const token = jwt.sign(user.dataValues, secretPassword, jwtConfig);
  return { token };
};

module.exports = {
  creatNewUser,
};
