const express = require('express');
const server = express();
const apiRouter = require("./routes");

server
  .use("/api/v1",apiRouter)
  .use((req,res,next)=>{
    res.sendStatus(404)
  })
  .use((err,req,res,next)=>{
    res.sendStatus(500);
  })

module.exports = server;