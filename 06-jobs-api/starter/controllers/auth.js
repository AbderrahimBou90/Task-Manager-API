// import user model
const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");

const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  console.log(user)
  res.status(StatusCodes.CREATED).json({ user });
};

const login = (req, res) => {
  res.send("login user");
};

module.exports = {
  login,
  register,
};
