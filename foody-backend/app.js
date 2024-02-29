const express = require("express");
const { requiresAuth } = require("express-openid-connect");
const path = require("path");
const { NotFoundError } = require("./expressError");

const app = express();
const { authenticateJWT } = require("./middleware/auth");

const cors = require("cors");
const { auth } = require("express-openid-connect");
const dotenv = require("dotenv").config();

app.use(express.static(path.join(__dirname, "..", "foody-frontend", "build")));

app.use(express.json());
app.use(cors());
const usersRoutes = require("./routes/users");
const mealsRoutes = require("./routes/meals");
const exercisesRoutes = require("./routes/exercises");
app.use(authenticateJWT);

app.use("/auth", usersRoutes);
app.use("/meals", mealsRoutes);
app.use("/exercises", exercisesRoutes);

app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "foody-frontend", "build", "public/index.html"),
  );
});
/** Handle 404 errors -- this matches everything */
app.use(function (req, res, next) {
  return next(new NotFoundError());
});

/** Generic error handler; anything unhandled goes here. */
app.use(function (err, req, res, next) {
  if (process.env.NODE_ENV !== "test") console.error(err.stack);
  const status = err.status || 500;
  const message = err.message;

  return res.status(status).json({
    error: { message, status },
  });
});

module.exports = app;
