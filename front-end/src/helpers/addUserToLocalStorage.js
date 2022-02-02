const addUserToLocalStorage = (user, token) => {
  const { id, name, email, role } = user;
  const newUser = { id, name, email, role, token };
  console.log(newUser);
  localStorage.setItem('user', JSON.stringify(newUser));
};

export default addUserToLocalStorage;
