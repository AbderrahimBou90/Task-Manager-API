
const getAllJobs = (req, res) => {
  res.send("get all jobs");
};


const getSingleJob = (req, res) => {
  res.send("get single jobs");
};


const createJob = (req, res) => {
  res.send("create job");
};


const updateJob = (req, res) => {
  res.send("update job");
};


const deleteJob = (req, res) => {
  res.send("delete job");
};

module.exports = {
  getAllJobs,
  getSingleJob,
  createJob,
  updateJob,
  deleteJob,
};