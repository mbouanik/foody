const express = require("express");
const { BadRequestError } = require("../expressError");
const User = require("../modeles/user");
const { createToken } = require("../helper/token");
const router = express.Router();

router.get("/check-user/:id", async (req, res, next) => {
  const user = await User.checkeUser(req.params.id);
  user.token = createToken(user);

  return res.json({ user: user ? user : false });
});

router.get("/get-user/:id", async (req, res, next) => {
  console.log(`params : ${req.params.id}`);
  const user = await User.getCurrentUser(req.params.id);
  user.token = createToken(user);
  return res.json({ user });
});

module.exports = router;
