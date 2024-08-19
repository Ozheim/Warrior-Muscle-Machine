const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/User");
require("dotenv").config();

const app = express();

mongoose
  .connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use("/api/stuff", stuffRoutes);
app.use("/api/auth", userRoutes);

module.exports = app;
