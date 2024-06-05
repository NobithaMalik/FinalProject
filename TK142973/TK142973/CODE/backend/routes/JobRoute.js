const express = require("express");
const jobController = require("../controller/JobController");

const router = express.Router();

router.get("/", jobController.getAllJobs);
router.post("/", jobController.addJob);
router.get("/:id", jobController.getJobById);
router.patch("/:id", jobController.updateJobById);
router.delete("/:id", jobController.deleteJobById);
router.get("/appli/:id",jobController.getApllyJobs);

module.exports = router;
