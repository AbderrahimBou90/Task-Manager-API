const authorize = (req,res,next) => {
 const {user} = req.query
 if(user === 'mohammed'){
  // we adding a property of user to req obejct
  req.user = {name:'mohammed',id:5}
  next()
 } else {
  res.status(401).send('unauthorized')
 }
}

module.exports = authorize