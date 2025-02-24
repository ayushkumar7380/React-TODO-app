const {
  createUser,
  getUsers,
  getUserByUsername,
  updateUser,
  deleteUser,
} = require("./userController");

(async () => {
  await createUser("john_doe", "john@example.com", "securepassword");
  await getUsers();
  await getUserByUsername("john_doe");
  await updateUser("john_doe", "newemail@example.com");
  await deleteUser("john_doe");
})();
