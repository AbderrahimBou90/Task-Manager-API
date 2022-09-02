const express = require("express");
const router = express.Router();

// import both of the functions from auth controller
const { register, login } = require("../controllers/auth");

router.post("/register", register);
router.post("/login", login);


module.exports = router;
