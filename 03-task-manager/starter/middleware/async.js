// asynchronse wrapper is just middleware function 

// we passing in the controller function as argument in asyncWrapper
const asyncWrapper = (fn) => {
  return async (req,res,next)=>{
  try {
   await fn(req,res,next)
  } catch (error) {
   // we passing next to an next set of middleware 
   next(error)
  }
  }
}


module.exports = asyncWrapper 