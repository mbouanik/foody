const express = require("express");
const { BadRequestError } = require("../expressError");
const Exercise = require("../modeles/exercise.js");
const { ensureLoggedIn } = require("../middleware/auth");

const router = express.Router();

router.post("/add-exercise", ensureLoggedIn, async (req, res, next) => {
  const data = req.body;
  console.log(data);
  const result = await Exercise.addExercise(data);
  return result;
});

router.post("/remove-exercise", ensureLoggedIn, async (req, res, next) => {
  const data = req.body;
  // console.log(data);
  const result = await Exercise.removeExercise(data);
  console.log(result);
  return result;
});

module.exports = router;
