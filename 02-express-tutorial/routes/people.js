// const express = require('express')
// const router = express.Router()

// this people array is temporary for now before controller setup 
// const { people } = require("../data");

// // we response for geting data and we know how to send back json data 
// router.get("/", (req, res) => {
//   res.status(200).json({ success: true, data: people });
// });

// // we posting data
// router.post('/',(req,res)=>{
//  const {name} = req.body
//  if(!name){
//   return res.status(400).json({success:false,msg:'please provide name value'})
//  }
//  res.status(201).json({success:true,person:name})
// })


// // for testing postman purpose 
// router.post('/postman',(req,res)=>{
//  const {name} = req.body 
//  if (!name) {
//    return res
//      .status(400)
//      .json({ success: false, msg: "please provide name value" });
//  }
//   res.status(201).json({ success: true, person: [...people,{name,id:45}] });

// })

// // *********************** Methods - put **************************

// router.put('/:id',(req,res)=>{
//  const {id} = req.params
//  const {name} = req.body
//  console.log(id,name)

//  const person = people.find(person=>person.id === Number(id))
//  if (!person) {
//    return res
//      .status(404)
//      .json({ success: false, msg: `no person with id ${id}` });
//  }
//  const newPerson = people.map((person)=>{
//   if(person.id === Number(id)){
//    person.name = name 
//   }
//   return person 
//  })
//  res.status(200).json({success:true, person:newPerson})
// })

// // ***********************   Methods - delete   **********************

// router.delete('/:id',(req,res)=>{
//  const {id} = req.params

//  console.log(id)
//  const person = people.find(person => person.id === Number(id))
//  if(!person){
//   return res.status(404).json({success:false,data:`no person with id ${id}`})
//  }
//  const newArrPeoples = people.filter(person => person.id !== Number(id))
//  res.status(200).json({success:true,data:newArrPeoples})
//  // res.status(200).send('data deleted')
// })

// module.exports = router


// ************   Express Router - Controllers **************************


// controller is just the name of callback function in get or post or put or delete,... for exmaple :
// app.get('/login',(req,res)=>{
//   res.status(200).json({ success: true, data: people });
// })

// it would be nicer if each controller get in separte file and for that we create separate folder by the name of controllers (common convention) and we add controllers in separate files 



const express = require("express");
const router = express.Router();

const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require("../controllers/people");

// we response for geting data and we know how to send back json data
router.get("/", getPeople);
// we posting data
router.post("/",createPerson );
// for testing postman purpose
router.post("/postman", createPersonPostman );
// *********************** Methods - put **************************
router.put("/:id", updatePerson);
// ***********************   Methods - delete   **********************
router.delete("/:id",deletePerson );


// and we can chaning methods in route that have same path 

// router.route('/').get(getPeople).post(createPerson)
// router.route('/postman').post(createPersonPostman)
// router.route("/:id").put(updatePerson).delete(deletePerson);


module.exports = router;
