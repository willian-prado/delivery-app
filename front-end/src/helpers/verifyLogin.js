const verifyLogin = (email, password) => {
  const PASSWORD_MIN_LENGTH = 6;
  const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const validEmail = EMAIL_REGEX.test(email);
  const validPassword = password.length >= PASSWORD_MIN_LENGTH;

  return validEmail && validPassword;
};

export default verifyLogin;
