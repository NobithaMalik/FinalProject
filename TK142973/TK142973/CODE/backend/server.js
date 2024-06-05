//imports
const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");

//routes
const studentRoutes = require("./routes/StudentRoute");
const jobRoutes = require("./routes/JobRoute");
const trainingRoutes = require("./routes/TrainingRoute");

const app = express();
const port = 5000;





app.use('/resume',express.static('resume'))
app.use('/resumes',express.static('resumes'))


app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/Placement&TrainingCenter", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connected to database");
  }
});

app.use("/students", studentRoutes);
app.use("/jobs", jobRoutes);
app.use("/trainings", trainingRoutes);

app.listen(port, () => console.log(`Listening On http://localhost:${port}`));
