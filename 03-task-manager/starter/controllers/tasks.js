// import model
const Task = require('../models/Task')

// create the controller functions 
const getAllTasks = async (req, res) => {
  try {
    // Task.find({}) gets us all the document (data) in the collection
    const tasks = await Task.find({})
    res.status(200).json({ tasks })
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(201).json({task});
  } catch (error) {
    res.status(500).json({ msg: error })
  }
};

const getSingleTask = async (req, res) => {
  // for testing purposes in postman
  try {
    // we give id an aliase 
    const {id:taskID} = req.params
    // you can use findOne() or findById()
    const task = await Task.findOne({_id:taskID})
    // if something went wrong with an id 
    if(!task){
      // if we change an carachter in id we type 404 in status 
      return res.status(404).json({msg:`No task with id ${taskID}`})
    }
    res.status(200).json({task})
  } catch (error) {
    // if id doesn't much the amount of carachters in status we type 500
    res.status(500).json({ msg: error });
  }
};

const updateTask = (req, res) => {
  res.send("update task");
};

const deleteTask = async (req, res) => {
  try {
    const { id:taskID } = req.params
    const task = await Task.findOneAndDelete({_id:taskID})
    if(!task){
      return res.status(404).json({msg:`No task with id ${taskID}`})
    }
    // we add task to json just for see task and see what are doing in postman 
    res.status(200).json({ task })
  } catch (error) {
      res.status(500).json({ msg: error });
  }
};

module.exports = {
 getAllTasks,
 createTask,
 getSingleTask,
 updateTask,
 deleteTask
}