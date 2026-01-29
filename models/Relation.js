const mongoose = require("mongoose");

const relationshipSchema = new mongoose.Schema({
  married: Boolean,
  children: Number,
  relatives: [String],
  parents: [String]
});

module.exports = mongoose.model("Relationship", relationshipSchema);
