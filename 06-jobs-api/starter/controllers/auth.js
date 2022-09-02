// import user model
const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const {BadRequestError} = require('../errors')

const register = async (req, res) => {
 // // we can check for empty values right in the controller
 // const {name,email,password} = req.body
 // if(!name || !email || !password){
 //  throw new BadRequestError('Please provide name, email and password')
 // }
 // // but in this project we check for emptly values by mongoose validator 
 // create user in DB
  const user = await User.create({ ...req.body });
  res.status(StatusCodes.CREATED).json({ user });
};

const login = (req, res) => {
  res.send("login user");
};

module.exports = {
  login,
  register,
};
