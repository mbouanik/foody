const express = require("express");
const { BadRequestError } = require("../expressError");
const Exercise = require("../models/exercise.js");
const { ensureLoggedIn } = require("../middleware/auth");

const router = express.Router();

router.post("/add-exercise", ensureLoggedIn, async (req, res, next) => {
  const data = req.body;
  const result = await Exercise.addExercise(data);
  return result;
});

router.post("/remove-exercise", ensureLoggedIn, async (req, res, next) => {
  const data = req.body;
  // console.log(data);
  const result = await Exercise.removeExercise(data);
  return result;
});

module.exports = router;
