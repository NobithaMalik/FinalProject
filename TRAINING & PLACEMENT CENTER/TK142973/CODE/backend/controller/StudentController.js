const User = require("../model/Student");
const multer = require("multer")
const path = require("path")
const { v4: uuid } = require('uuid');
const Apply = require("../model/ApplyJob");
const Applys = require("../model/Applyintern");

function addStudent(req, res) {
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send("User Added Succesfully");
    }
  });
}

function getStudentById(req, res) {
  const id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(user);
    }
  });
}

function deleteStudentById(req, res) {
  const id = req.params.id;
  User.findByIdAndDelete(id, (err, user) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send("User deleted succesfully");
    }
  });
}

function updateStudentById(req, res) {
  const id = req.params.id;
  User.findByIdAndUpdate(id, { $set: req.body }, (err, user) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(user);
    }
  });
}







const Storage = multer.diskStorage({
  destination: "resume",
  filename: (req, file, cb) => {
    const unnifix = uuid();
    const fileExtension = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${unnifix}${fileExtension}`);
  }
});


const upload = multer({storage:Storage})




//apply job
async function applyJob(req, res) {
  const userId = req.params.userid;
  const jobId = req.params.jobid;
  try {
    upload.single('resume')(req, res, async function(err) {
      if (err) {
        console.log(err)
        return res.status(400).send('Error uploading file.');
      }
      try {
        const user = await User.findById(userId);
        if (!user) {
          return res.status(404).send('No user found');
        } else {
          const User = await Apply.findOne({user:userId});
          if(User){
            return res.status(400).send('Student Already Apply One Job')
          }else{
            const NewJob = await Apply.create({
              user:userId,
              job:jobId,
              resume:req.file?.filename,
              date:Date.now()
            })
            if(NewJob){
              return res.status(201).send('Job Applied Successfully')
            }
          }
        }
      } catch (error) {
        console.error(error);
        return res.status(500).send('Internal server error');
      }
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send('Internal server error');
  }
}


const Storages = multer.diskStorage({
  destination: "resumes",
  filename: (req, file, cb) => {
    const unnifix = uuid();
    const fileExtension = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${unnifix}${fileExtension}`);
  }
});


const uploads = multer({storage:Storages})


//applyintern
async function applyintern(req, res) {
  const userids = req.params.userids;
  const internid = req.params.internid;
  try {
    uploads.single('resumes')(req, res, async function(err) {
      if (err) {
        return res.status(400).send('Error uploading file.');
      }
      try {
        const user = await User.findById(userids);
        if (!user) {
          return res.status(404).send('No user found');
        } else {
          const User = await Applys.findOne({user:userids});
          if(User){
            return res.status(400).send('Student Already Apply One Job')
          }else{
            const NewJob = await Applys.create({
              user:userids,
              job:internid,
              resumes:req.file?.filename,
              date:Date.now()
            })
            if(NewJob){
              return res.status(201).send('Job Applied Successfully')
            }
          }
        }
      } catch (error) {
        console.error(error);
        return res.status(500).send('Internal server error');
      }
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send('Internal server error');
  }
}






function getUserByUsernameAndPassword(req, res) {
  const email = req.params.email;
  const password = req.params.password;
  User.findOne({ email: email, password: password }, (err, user) => {
    if (err) {
      res.status(500).send(err);
    } else {
      if (user == null) {
        res.status(200).send("User not found please register");
      } else {
        res.status(200).send(user);
      }
    }
  });
}

function getAllUsers(req, res) {
  User.find({}, (err, users) => {
    if (err) {
      res.send(500).send(err);
    } else {
      res.status(201).send(users);
    }
  });
}

module.exports = {
  getAllUsers,
  getStudentById,
  updateStudentById,
  deleteStudentById,
  addStudent,
  applyJob,
  applyintern,
  getUserByUsernameAndPassword,
};
