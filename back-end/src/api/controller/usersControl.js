const usersServices = require('../service/usersService');

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const creatNewUser = await usersServices.creatNewUser({ displayName, email, password, image });
    return res.status(201).json(creatNewUser);
  } catch (error) {
    if (error.message === 'User already registered') {
      return res.status(409).json({ message: error.message });
    }
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createUser,
};
