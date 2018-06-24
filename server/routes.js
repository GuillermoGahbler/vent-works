const router = require('express').Router();
const {vent_controller} = require("../contexts");

router
  .get("/vents",(req,res,next)=>{
    vent_controller.index((err,docs)=>{
      if(err) throw err;
      else res.json(docs)
    })
  })

module.exports = router;