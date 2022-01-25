function validateEmail(req, res, next) {
  const { email } = req.body;
  if (email === '') {
    return res.status(400).json({ message: '"email" is not allowed to be empty' });
  }
  if (!email) {
    return res.status(400).json({ message: '"email" is required' });
  }
  next();
}

function validatePassword(req, res, next) {
  const { password } = req.body;
  if (password === '') {
    return res.status(400).json({ message: '"password" is not allowed to be empty' });
  }
  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  if (password.length < 6) {
    return res.status(400).json({ message: '"password" shorter than 6 characters' });
  }
}

module.exports = {
  validateEmail,
  validatePassword,
};
