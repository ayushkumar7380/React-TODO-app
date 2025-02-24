const User = require("./userModel");

// Create a new user
async function createUser(username, email, password) {
  const user = new User({ username, email, password });
  await user.save();
  console.log("User Created:", user);
}

// Get all users
async function getUsers() {
  const users = await User.find();
  console.log("All Users:", users);
}

// Get user by username
async function getUserByUsername(username) {
  const user = await User.findOne({ username });
  console.log("User Found:", user);
}

// Update a user
async function updateUser(username, newEmail) {
  await User.findOneAndUpdate({ username }, { email: newEmail });
  console.log("User Updated");
}

// Delete a user
async function deleteUser(username) {
  await User.findOneAndDelete({ username });
  console.log("User Deleted");
}

module.exports = {
  createUser,
  getUsers,
  getUserByUsername,
  updateUser,
  deleteUser,
};
