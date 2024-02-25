const express = require("express");
const { requiresAuth } = require("express-openid-connect");

const app = express();

const cors = require("cors");
const { auth } = require("express-openid-connect");
const dotenv = require("dotenv").config();

app.use(express.json());
app.use(cors());
const usersRoutes = require("./routes/users");
const mealsRoutes = require("./routes/meals");

app.use("/auth", usersRoutes);
app.use("/meals", mealsRoutes);

module.exports = app;
