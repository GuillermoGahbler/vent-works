const mongoose = require("mongoose");

const ventSchema = new mongoose.Schema({
  message:{
    type: String
  },
  title: {
    type: String
  }
},{
  timestamps: { createdAt: 'created_at' }
});


module.exports = mongoose.model("vents",ventSchema);