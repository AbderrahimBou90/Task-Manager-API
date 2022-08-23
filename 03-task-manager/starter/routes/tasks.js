// setup router
const express = require('express')

const router = express.Router()

const {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");


router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getSingleTask).patch(updateTask).delete(deleteTask)

// the put() and the patch() methods are both for updating resource but: 
// put() is: replace existing resource and rest of them effectively will be romved 
// patch() is: for partial update ,we are just updating the properties that we're passing in 

module.exports = router 
