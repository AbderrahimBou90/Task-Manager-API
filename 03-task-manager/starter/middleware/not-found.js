const notFound = (req,res)=> res.status(404).send('<h3>Route does not exist...</h3>')

module.exports = notFound