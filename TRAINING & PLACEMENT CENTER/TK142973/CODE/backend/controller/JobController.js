const Job = require("../model/Job");
const Apply = require("../model/ApplyJob");
const Students = require('../model/Student')
const { default: mongoose } = require("mongoose");

function addJob(req, res) {
  const job = new Job(req.body);
  job.save((err, job) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send("Job Added Succesfully");
    }
  });
}

function getJobById(req, res) {
  const id = req.params.id;
  Job.findById(id, (err, job) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(job);
    }
  });
}

function deleteJobById(req, res) {
  const id = req.params.id;
  Job.findByIdAndDelete(id, (err, job) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send("Job deleted succesfully");
    }
  });
}

function updateJobById(req, res) {
  Job.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, job) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send("Job updated succesfully");
    }
  });
}

function getAllJobs(req, res) {
  Job.find({}, (err, jobs) => {
    if (err) {
      res.send(500).send(err);
    } else {
      res.status(201).send(jobs);
    }
  });
}



async function getApllyJobs (req,res){
  const id = req.params.id
  console.log(id)
  try{
    const Jobs  = await Job.findById(id)
    if(!Jobs){
      return res.send("no jobs found")
    }
    console.log(Jobs)
    const Student = await Apply.aggregate([
      {
        $match:{
          job:new mongoose.Types.ObjectId(id)
        }
      },
      {
        $lookup:{
          from:Students.collection.name,
          localField:"user",
          foreignField:'_id',
          as : 'Students'
          
        }
      }
    ])
    console.log(Student)
    if(Student.length === 0){
      return res.send("no Application Found")
    }else{
      return res.send(Student)
    }

  }catch(error){
    return res.send("internal server errorss")
  }
}
module.exports = {
  getAllJobs,
  getJobById,
  deleteJobById,
  updateJobById,
  addJob,
  getApllyJobs
};
