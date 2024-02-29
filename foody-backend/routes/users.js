const express = require("express");
const { BadRequestError } = require("../expressError");
const User = require("../models/user");
const { createToken } = require("../helper/token");
const router = express.Router();
const { ensureLoggedIn } = require("../middleware/auth");

router.get("/check-user/:id", async (req, res, next) => {
  const user = await User.checkeUser(req.params.id);
  user.token = createToken(user);

  return res.json({ user });
});

router.get("/get-user/:id", ensureLoggedIn, async (req, res, next) => {
  const { id } = req.body;
  const user = await User.getCurrentUser(req.params.id);
  user.token = createToken(user);
  return res.json({ user });
});

router.patch("/profile/update", ensureLoggedIn, async (req, res, next) => {
  const { id, diet } = req.body;
  const result = await User.updateDiet(id, diet);
  return res.json({ result });
});
module.exports = router;
