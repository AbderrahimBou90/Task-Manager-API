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
      return res.status(404).json({msg:`No task with id ${taskID}`})
    }
    res.status(200).json({task})
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTask = (req, res) => {
  res.send("update task");
};
const deleteTask = (req, res) => {
  res.send("delete task");
};

module.exports = {
 getAllTasks,
 createTask,
 getSingleTask,
 updateTask,
 deleteTask
}