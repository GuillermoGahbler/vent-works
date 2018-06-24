const model = require("./model");

const getAllVents = (cb)=> model.find({}).exec(cb)

module.exports={
  index: getAllVents
}