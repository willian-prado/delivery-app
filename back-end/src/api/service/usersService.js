const md5 = require('md5');
const { User } = require('../../database/models/index');

const tokenGenerator = require('../middleware/tokenGenerator');

const checkEmailExistence = require('../middleware/checkEmailExistence');

const creatNewUser = async ({ name, email, password }) => {
  await checkEmailExistence(email);

  const newPassword = md5(password);
  const role = 'customer';
  const user = await User.create({ name, email, password: newPassword, role });
  const token = tokenGenerator(user);
  return { token };
};

module.exports = {
  creatNewUser,
};
