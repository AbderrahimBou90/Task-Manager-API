const express = require('express')
const router = express.Router()

const {login,dashboard} = require('../controllers/main')
const authMiddleware = require('../middleware/auth')

// now every time someone hits this route first go through the middleware and since middleware has next() method then i'll pass to the dashboard 
router.route('/dashboard').get(authMiddleware,dashboard)
router.route('/login').post(login)

module.exports = router