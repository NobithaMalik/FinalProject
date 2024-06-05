const Training = require("../model/Training");
// const Training = require("../model/Training");
const Applys = require("../model/Applyintern");
const { default: mongoose } = require("mongoose");
const Students = require("../model/Student")

function addTraining(req, res) {
  const training = new Training(req.body);
  training.save((err, training) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send("Training Added Succesfully");
    }
  });
}

function getTrainingById(req, res) {
  const id = req.params.id;
  Training.findById(id, (err, training) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(training);
    }
  });
}

function deleteTrainingById(req, res) {
  const id = req.params.id;
  Training.findByIdAndDelete(id, (err, training) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send("Training deleted succesfully");
    }
  });
}

function updateTrainingById(req, res) {
  const id = req.params.id;
  Training.findByIdAndUpdate(id, { $set: req.body }, (err, training) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send("Training updated succesfully");
    }
  });
}

function getAllTrainings(req, res) {
  Training.find({}, (err, trainings) => {
    if (err) {
      res.send(500).send(err);
    } else {
      res.status(201).send(trainings);
    }
  });
}



async function getAllApplication (req,res){
  try{
    const id = req.params.id
    const Trainings = await Training.findById(id)
    if(!Trainings){
      return res.send('no trainig found with this id')
    }
    const Student = await Applys.aggregate([
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
    console.log(Student,"sdfs")
    if(Student.length === 0){
      return res.send("no application found")
    }else{
      return res.send(Student)
    }
  }catch(error){
    console.log(error)
    return res.send('internal server serror')
  }

}

module.exports = {
  getAllTrainings,
  getTrainingById,
  deleteTrainingById,
  updateTrainingById,
  addTraining,
  getAllApplication
};
