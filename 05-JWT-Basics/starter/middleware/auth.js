// auth middleware (refactor code from dashboard controller)

const jwt = require("jsonwebtoken");
const {UnauthenticatedError} = require("../errors");

const authonticationMiddleware = async (req, res, next) => {
  // console.log(req.headers)
  const authHeader = req.headers.authorization;
  // console.log(authHeader)
  // check authHeader
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedError("No token provided");
  }
  // extract only token
  const token = authHeader.split(" ")[1];

  // Verify Token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(decoded)
    const {id,username} = decoded
    // setup user property with this object value
    req.user = {id, username}
    next();
  } catch (error) {
    throw new UnauthenticatedError("Not Authorized to access this route");
  }
};

module.exports = authonticationMiddleware;
