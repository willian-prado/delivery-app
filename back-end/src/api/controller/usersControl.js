const usersServices = require('../service/usersService');

const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const creatNewUser = await usersServices.creatNewUser({
      name,
      email,
      password,
      role: role || 'customer',
    });
    return res.status(201).json(creatNewUser);
  } catch (error) {
    if (error.message === 'User already registered') {
      return res.status(409).json({ message: error.message });
    }
    return res.status(404).json({ message: error.message });
  }
};

const getUsers = async (_req, res) => {
  try {
    const getAllUsers = await usersServices.getAllUsers();
    return res.status(200).json(getAllUsers);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.body;
    await usersServices.deleteUserById(id);
    res.status(200).end();
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createUser,
  getUsers,
  deleteUser,
};
