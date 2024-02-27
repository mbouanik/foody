const express = require("express");
const { BadRequestError } = require("../expressError");
const Exercise = require("../modeles/exercise.js");

const router = express.Router();

router.post("/add-exercise", async (req, res, next) => {
  const data = req.body;
  console.log(data);
  const result = await Exercise.addExercise(data);
  return result;
});

router.post("/remove-exercise", async (req, res, next) => {
  const data = req.body;
  console.log(data);
  const result = await Exercise.removeExercise(data);
  return result;
});

module.exports = router;
