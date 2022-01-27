const verifyRegister = (name, email, password) => {
  const NAME_MINLENGTH = 12;
  const PASSWORD_MINLENGTH = 6;
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const isValidName = name.length > NAME_MINLENGTH;
  const isValidEmail = regex.test(email);
  const isValidPassword = password.length >= PASSWORD_MINLENGTH;

  if (isValidName && isValidEmail && isValidPassword) {
    return true;
  }
};

export default verifyRegister;
