// import user model
const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError,UnauthenticatedError } = require("../errors");

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
  const token = user.createJWT()
  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};



const login = async (req, res) => {
 const {email,password} = req.body
//  check if they exist 
if(!email || !password){
  throw new BadRequestError('Please provide email and passwrod')
}
// check for the user 
const user = await User.findOne({email})
// compare password (next video)
if(!user){
  throw new UnauthenticatedError('Invalid Credentials ')
}
// if user there 
const token = user.createJWT()
res.status(StatusCodes.OK).json({user:{name:user.name},token})
};

module.exports = {
  login,
  register,
};
