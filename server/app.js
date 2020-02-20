require("dotenv").config();
const { PORT, DB_NAME, DB_PORT, DB_PASSWORD } = process.env;
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const logger = require("morgan");

const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

io.on("connection", function(socket) {
  console.log("a user connected");
  socket.on("disconnect", function() {
    console.log("user disconnected");
  });
  socket.on("send msg", msg => {
    socket.broadcast.emit("receive msg", msg);
  });
});

http.listen(3002, function() {
  console.log("socket.io listening on *:3002");
});

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = {
  host: "localhost",
  port: DB_PORT || 5432,
  database: DB_NAME || "thirdwheel",
  password: DB_PASSWORD
};
const db = new Pool(dbParams);
db.connect();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/users", require("./routes/users")(db));
app.use("/api/matches", require("./routes/matches")(db));
app.use("/api/session", require("./routes/session")(db));

module.exports = app;
