const express = require("express");
const { BadRequestError } = require("../expressError");
const Meal = require("../modeles/meal");
const { ensureLoggedIn } = require("../middleware/auth");

const router = express.Router();

router.post("/add-meal", ensureLoggedIn, async (req, res, next) => {
  const data = req.body;

  const result = await Meal.addMeal(data);
  return result;
});

router.post("/remove-meal", ensureLoggedIn, async (req, res, next) => {
  const data = req.body;

  const result = await Meal.removeMeal(data);
  return result;
});
module.exports = router;
