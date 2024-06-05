const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phone: Number,
  cgpa: { type: Number, default: 5 },
  // jobsApplied: [],
  // trainings: [],
});

const Student = mongoose.model("Students", studentSchema);

module.exports = Student;
