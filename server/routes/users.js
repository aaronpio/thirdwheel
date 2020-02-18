const express = require("express");
const router = express.Router();

const userRouter = db => {
  /* GET users listing. */
  router.get("/", function(req, res, next) {
    res.send("respond with a resource");
  });

  router.get("/shuffle", function(req, res) {
    const users = db
      .query("SELECT * FROM users LIMIT 6")
      .then(_res => res.json(_res.rows))
      .catch(err => console.log(err));
  });

  return router;
};

module.exports = userRouter;
