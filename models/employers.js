const mongoose = require('mongoose');

const employersSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
    trim: true
  },

  address: {
    village: { type: String, required: true, trim: true },
    cell: { type: String, required: true, trim: true },
    sector: { type: String, required: true, trim: true },
    district: { type: String, required: true, trim: true },
    province: { type: String, required: true, trim: true },
    country: { type: String, required: true, trim: true }
  },

  nationalId: {
    type: Number,
    required: true
  },

  relationship: {
    married: { type: Boolean, required: true },
    children: { type: Number, required: true },
    relatives: { type: String, required: true },
    parents: { type: String, required: true }
  },

  age: {
    type: Number,
    required: true
  },

  academicInformation: {

    primarySchool: {
      schoolName: { type: String, required: true, trim: true },
      email: { type: String, required: true, trim: true },
      country: { type: String, required: true },
      stateOrProvince: { type: String, required: true },
      yearOfAttendance: { type: Number, required: true }
    },

    secondarySchool: {
      schoolName: { type: String, required: true, trim: true },
      email: { type: String, required: true, trim: true },
      country: { type: String, required: true },
      stateOrProvince: { type: String, required: true },
      yearOfAttendance: { type: Number, required: true }
    },

    university: {
      universityName: { type: String, required: true, trim: true },
      email: { type: String, required: true, trim: true },
      country: { type: String, required: true },
      stateOrProvince: { type: String, required: true },
      yearOfAttendance: { type: Number, required: true },
      degreeAcquired: { type: String, required: true, trim: true },
      coursesTaken: { type: String, required: true, trim: true }
    }
  }

}, {
  timestamps: true
});

module.exports = mongoose.model('Employer', employersSchema);
