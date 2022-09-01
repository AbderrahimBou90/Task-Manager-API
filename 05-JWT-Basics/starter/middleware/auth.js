// auth middleware (refactor code from dashboard controller)

const jwt = require("jsonwebtoken");
const CustomAPIError = require("../errors/custom-error");

const authonticationMiddleware = async (req, res, next) => {
  // console.log(req.headers)
  const authHeader = req.headers.authorization;
  // console.log(authHeader)
  // check authHeader
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new CustomAPIError("No token provided", 401);
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
    throw new CustomAPIError("Not Authorized to access this route", 401);
  }
};

module.exports = authonticationMiddleware;
