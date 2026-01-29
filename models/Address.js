const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  village: String,
  cell: String,
  sector: String,
  district: String,
  province: String,
  country: String
});

module.exports = mongoose.model("Address", addressSchema);
