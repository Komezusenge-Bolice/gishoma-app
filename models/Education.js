const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
  level: {
    type: String,
    enum: ["Primary", "Secondary", "University"]
  },
  schoolName: String,
  email: String,
  country: String,
  stateOrProvince: String,
  yearOfAttendance: Number,
  degree: String,
  courses: [String]
});

module.exports = mongoose.model("Education", educationSchema);
