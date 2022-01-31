const md5 = require('md5');
const { User } = require('../../database/models');

const checkEmailExistence = require('../middleware/checkEmailExistence');

const createNewSeller = async ({ name, email, password, role }) => {
  await checkEmailExistence(email);

  const newPassword = md5(password);

  const user = await User.create({ name, email, password: newPassword, role });
  return user;
};

module.exports = {
  createNewSeller,
};