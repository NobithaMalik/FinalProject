const mongoose = require("mongoose");

const trainingSchema = new mongoose.Schema({
  subject: String,
  title: String,
  date: String,
  description: String,
});

const Training = mongoose.model("Trainings", trainingSchema);

module.exports = Training;
