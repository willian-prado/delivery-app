const { User } = require('../../database/models/index');

const checkEmailExistence = async (email) => User.findOne({
  where: { email },
});

module.exports = async (email) => {
  const checkEmail = await checkEmailExistence(email);
  if (checkEmail !== null) {
    const message = 'User already registered';
    throw new Error(message);
  }
};