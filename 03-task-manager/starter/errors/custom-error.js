// create custom error class 

class CustomAPIError extends Error {
 // when we create new instance of a class we invoke constructor method 
 constructor (message,statusCode){
  super(message)
  // create status property 
  this.statusCode = statusCode
 }
}



// and we insert it in function 
const createCustomError = (msg,statusCode)=>{
 return new CustomAPIError(msg,statusCode)
}

module.exports = {createCustomError,CustomAPIError}