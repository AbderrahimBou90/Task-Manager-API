const express = require('express')
const router = express.Router()


 router.post("/", (req, res) => {
   console.log(req.body);
   const { name } = req.body;
   if (name) {
     return res.status(200).send(`welcome mr ${name}`);
   } else {
     return res.status(401).send("please provide credentials");
   }
   // res.send('POST')
 });

 module.exports = router 