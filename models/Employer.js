const mongoose = require("mongoose");

const employerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  nationalId: { type: Number, required: true, unique: true },
  age: Number,

  address: { type: mongoose.Schema.Types.ObjectId, ref: "Address" },
  relationship: { type: mongoose.Schema.Types.ObjectId, ref: "Relationship" },
  education: [{ type: mongoose.Schema.Types.ObjectId, ref: "Education" }]

}, { timestamps: true });

module.exports = mongoose.model("Employer", employerSchema);
