// import user model
const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  // ••••••••••••••••••••• hashing password code •••••••••••••••••••••••••
  // // hashing is one-way street meaning cannot be reversed, really really good for stroing password
  // // in order to generate hashed password we use two methods genStat() and hash()

  // const {name,email,password} = req.body
  // // genStal meaning generate random bytes, by providing number of rounds, keeping mind the more rounds you have the more processing power is going to require
  // const salt = await bcrypt.genSalt(10)
  // // the hash() method looking for two things: the password that wanna hash and the salt
  // const hashedPassword = await bcrypt.hash(password,salt)
  // const tempUserObj = {name,email,password:hashedPassword}
  // ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••

  // create user in DB
  const user = await User.create({ ...req.body });
  const token = jwt.sign({ userId: user._id, name: user.name }, "jwtSecret", {
    expiresIn: "30d",
  });
  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};



const login = (req, res) => {
  res.send("login user");
};

module.exports = {
  login,
  register,
};
