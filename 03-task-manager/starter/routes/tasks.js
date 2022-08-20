// setup router
const express = require('express')

const router = express.Router()


router.route('/').get((req,res)=>{
 res.send('get tasks')
})


module.exports = router 
