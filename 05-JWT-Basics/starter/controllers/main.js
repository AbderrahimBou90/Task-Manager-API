// ––––––––––––––––– what about going to do ––––––––––––––––––
// check username and password in post(login) request 
// if both of them exist we create new JWT, if not we send back error respons
// fi we create JWT then of course we want to send it back to front-end 
// send back to front-end 

// setup authontication so only the request with JWT can access the dashboard 
const jwt = require('jsonwebtoken')
const CustomAPIError = require('../errors/custom-error')


const login = async (req,res)=>{
  const { username, password } = req.body;
  // we check username and password either by:
  // mongoose validation
  // Joi package
  // in our case check in controller
  if (!username || !password) {
    // we throw an error
    throw new CustomAPIError("Please provide email and password", 400);
  }

  // just for demo, normally provided by DB!!!!
  const id = new Date().getTime();

  // in sign() method we need to provide 3 values: payload, a jwt secret, options
  // try to keep payload small, better experience for user 
  // just for Demo, in production we use JWT secret long, complex and unguessable string value !!!!!!! 
  const token = jwt.sign({ id,username },process.env.JWT_SECRET,{expiresIn:'30d'});


  res.status(200).json({msg:'user created',token})
}


const dashboard = async (req,res) =>{
 // console.log(req.headers)
 const authHeader = req.headers.authorization
 // console.log(authHeader)
 if(!authHeader || !authHeader.startsWith('Bearer ')){
    throw new CustomAPIError("Please provide email and password", 400);
 }
 const luckyNumber = Math.floor(Math.random() * 100)
 res.status(200).json({msg:`Hello, John Doe`,secret:`Here is your authorized data, your lucky number is ${luckyNumber}`})
}

module.exports = {login,dashboard}