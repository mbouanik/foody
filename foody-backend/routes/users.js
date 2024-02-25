const express = require("express");
const { BadRequestError } = require("../expressError");
const User = require("../modeles/user");

const router = express.Router();

router.get("/check-user/:id", async (req, res, next) => {
  const user = await User.checkeUser(req.params.id);
  return res.json({ user: user ? user : false });
});

router.get("/profile/:id", async (req, res, next) => {
  const user = await User.getCurrentUser(req.params.id);
  return res.json({ user });
});

module.exports = router;
