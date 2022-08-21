// create the controller functions 

const getAllTasks = (req, res) => {
  res.send("get all tasks");
};

const createTask = (req, res) => {
  // for testing puropses in postman
  res.json(req.body);
};

const getSingleTask = (req, res) => {
  // for testing purposes in postman
  res.json({id:req.params.id});
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