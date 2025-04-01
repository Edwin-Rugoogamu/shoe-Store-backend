const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const session = require("express-session");
require("dotenv").config();
const cors = require("cors");

const config = require("./config/db");
// const User = require('./models/form')

const Login = require("./routes/loginRoutes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(cors());
app.use("/", Login);

app.use(passport.initialize());
app.use(passport.session());
// passport.use(User.createStrategy());
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());



mongoose.connect(config.connect, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



const db = mongoose.connection;
// checking if db has connected
db.once("open", () => {
  console.log("connected to db");
});
db.on("error", (err) => {
  console.error(err);
});

app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public/images")));

app.get("*", (req, res) => {
  res.status(404).send("page doesn't exist");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
