const router = require('express').Router();

router
  .get("/users",(req,res,next)=>{
    res.send("this is the response from the users route")
  })

module.exports = router;