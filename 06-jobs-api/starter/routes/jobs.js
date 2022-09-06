const express = require("express");
const router = express.Router();

// import all of the functions from jobs controller
const {
  getAllJobs,
  getSingleJob,
  createJob,
  updateJob,
  deleteJob,
} = require("../controllers/jobs");

router.route('/').post(createJob).get(getAllJobs)
router.route('/:id').get(getSingleJob).patch(updateJob).delete(deleteJob)


module.exports = router 