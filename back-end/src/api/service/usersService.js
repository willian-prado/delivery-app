const md5 = require('md5');
const { User } = require('../../database/models/index');

const tokenGenerator = require('../middleware/tokenGenerator');

const checkEmailExistence = require('../middleware/checkEmailExistence');

const creatNewUser = async ({ name, email, password, role }) => {
  await checkEmailExistence(email);

  const newPassword = md5(password);
  const user = await User.create({ name, email, password: newPassword, role });
  const token = tokenGenerator(user);
  return { token };
};

const getAllUsers = async () => {
  const allUsers = await User.findAll({});
  return allUsers;
};

module.exports = {
  creatNewUser,
  getAllUsers,
};
