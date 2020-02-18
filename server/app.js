require("dotenv").config();
const { PORT, DB_NAME, DB_PORT, DB_PASSWORD } = process.env;
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const logger = require("morgan");

const app = express();

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = {
  host: "localhost",
  user: "aaron",
  port: DB_PORT || 5432,
  database: DB_NAME || "thirdwheel",
  password: DB_PASSWORD
};
const db = new Pool(dbParams);
db.connect();

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api/users", usersRouter(db));

module.exports = app;
