const express = require("express");
const studentController = require("../controller/StudentController");

const router = express.Router();

router.get("/", studentController.getAllUsers);
router.post("/", studentController.addStudent);
router.get(
  "/auth/:email/:password",
  studentController.getUserByUsernameAndPassword
);
router.get("/:id", studentController.getStudentById);
router.patch("/:id", studentController.updateStudentById);
router.post("/:userid/:jobid", studentController.applyJob);
router.post("/sss/:userids/:internid", studentController.applyintern);
router.delete("/:id", studentController.deleteStudentById);




module.exports = router;
