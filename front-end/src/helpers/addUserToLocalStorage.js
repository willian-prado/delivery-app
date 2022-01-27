const addUserToLocalStorage = (user, token) => {
  const { name, email } = user;
  const role = 'customer';
  const newUser = { name, email, role, token };
  console.log(newUser);
  localStorage.setItem('user', JSON.stringify(newUser));
};

export default addUserToLocalStorage;
