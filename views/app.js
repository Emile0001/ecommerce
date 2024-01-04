const path = require("path");

const express = require("express");

const db = require("../data/database");

const errorHandlerMiddleware = require("../middlewares/error-handler");
const authRoutes = require("../routes/auth.routes");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use(authRoutes);

app.use(errorHandlerMiddleware);

db.connectToDatabase()
    .then(function () {
        app.listen(3000);
    })
    .catch(function (error) {
        console.log("Failed to connect to the database!");
        console.log(error);
    });
