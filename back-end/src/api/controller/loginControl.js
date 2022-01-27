const loginService = require('../service/loginService');

const createLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const createNewLogin = await loginService.createNewLogin({ email, password });
    return res.status(200).json(createNewLogin);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports = { createLogin };
