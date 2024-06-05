const express = require("express");
const trainingController = require("../controller/TrainingController");

const router = express.Router();

router.get("/", trainingController.getAllTrainings);
router.post("/", trainingController.addTraining);
router.get("/:id", trainingController.getTrainingById);
router.patch("/:id", trainingController.updateTrainingById);
router.delete("/:id", trainingController.deleteTrainingById);
router.get("/apli/:id",trainingController.getAllApplication)

module.exports = router;
