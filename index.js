require("dotenv").config();

const express = require("express");
const app = express();

// Moteur de template
app.set("view engine", "ejs");
app.set("views", "./app/views");

// Middleware
app.use(express.static("./app/public"));

// Routage
const router = require("./app/router");
app.use(router);

// Serveur
app.listen(3000, () => {
  console.log("Your server running on port 3000...");
});
