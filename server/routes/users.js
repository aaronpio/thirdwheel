const express = require("express");
const router = express.Router();
const { msleep } = require("sleep");

const userRouter = db => {
  router.get("/shuffle", function(req, res) {
    msleep(500);
    db.query("SELECT * FROM users ORDER BY RANDOM() LIMIT 6")
      .then(_res => res.json(_res.rows))
      .catch(err => console.log(err));
  });

  router.get("/random", function(req, res) {
    msleep(500);
    db.query("SELECT * FROM users ORDER BY RANDOM() LIMIT 1")
      .then(_res => res.json(_res.rows[0]))
      .catch(err => console.log(err));
  });

  router.get("/:id", function(req, res) {
    msleep(500);
    db.query(`SELECT * FROM users WHERE id = ${req.params.id}`)
      .then(_res => res.json(_res.rows[0]))
      .catch(err => console.log(err));
  });

  return router;
};

module.exports = userRouter;
