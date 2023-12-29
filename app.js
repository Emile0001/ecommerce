const path = require("path");
const express = require("express");

const db = require("./data/database");

const authRoutes = require("./routes/auth.routes");
const { error } = require("console");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));
app.use(authRoutes);

db.connectToDatabase()
    .then(function () {
        app.listen(3000);
        console.log("server has started");
    })
    .catch(function (error) {
        console.log("Database connection failed!");
        console.log(error);
    });
