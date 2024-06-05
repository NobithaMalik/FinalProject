const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: String,
  skills: String,
  company: String,
  city: String,
  type: String,
  ctc: Number,
  about: String,
  requiredCgpa: { type: Number, default: 5 },
  date: String,
  studentsRegistered: {
    type: Number,
    default: 0,
  },
});

const Job = mongoose.model("Jobs", jobSchema);

module.exports = Job;
