const Job = require('../models/Job')
const {StatusCodes} = require('http-status-codes')
const {BadRequestError,NotFoundError} = require('../errors')


const getAllJobs = async (req, res) => {
  // we are looking for the id of the user (specific user(owner of account))
  const jobs = await Job.find({ createdBy: req.user.userId }).sort("createdAt");
  res.status(StatusCodes.OK).json({ jobs, count: jobs.length });
};


const getSingleJob = async (req, res) => {
  // we are looking for two things in req, job id form params and userId from user
  // we are doing nested desturcturing 
  const {user:{userId},params:{id:jobId} } = req
  const job = await Job.findOne({
    _id:jobId,
    createdBy:userId
  })
  if(!job){
    throw new NotFoundError(`No job with id ${jobId}`)
  }
  res.status(StatusCodes.OK).json({job});
};


const createJob = async (req, res) => {
  // we are looking for the id of the user (specific user (owner of account))
  // we create a property by name createdBy in req.body object and we a signe id as a value
  req.body.createdBy = req.user.userId
  // console.log(req.body)
  // we create job
  const job = await Job.create(req.body)
  res.status(StatusCodes.CREATED).json(job);
};


const updateJob = async (req, res) => {
  // we are looking for three things in req, job id form params and userId from user and req.body
    const {
      body: {company,position},
      user: { userId },
      params: { id: jobId },
    } = req;

    if(company === '' || position === ''){
      throw new NotFoundError('Company or Position fields can not be empty')
    }
    const job = await Job.findOneAndUpdate({_id:jobId,createdBy:userId},req.body,{new:true,runValidators:true})
    
    if (!job) {
      throw new NotFoundError(`No job with id ${jobId}`);
    }
    res.status(StatusCodes.OK).json({ job });
};


const deleteJob = async (req, res) => {
  // we are looking for two things in req, job id form params and userId from user
    const {
      user: { userId },
      params: { id: jobId },
    } = req;
  const job = await Job.findOneAndDelete({_id:jobId,createdBy:userId})
  
  if (!job) {
    throw new NotFoundError(`No job with id ${jobId}`);
  }
  res.status(StatusCodes.OK).send('job deleted');
};

module.exports = {
  getAllJobs,
  getSingleJob,
  createJob,
  updateJob,
  deleteJob,
};
