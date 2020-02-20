const express = require("express");
const router = express.Router();
const { msleep } = require("sleep");

const userRouter = db => {
  router.get("/shuffle", function(req, res) {
    msleep(500);
    db.query("SELECT * FROM users ORDER BY RANDOM() LIMIT 6")
      .then(cursor => res.json(cursor.rows))
      .catch(err => console.log(err));
  });

  router.get("/random", function(req, res) {
    msleep(500);
    db.query("SELECT * FROM users ORDER BY RANDOM() LIMIT 1")
      .then(cursor => res.json(cursor.rows[0]))
      .catch(err => console.log(err));
  });

  router.get("/:id", async function(req, res) {
    msleep(500);
    db.query(`SELECT * FROM users WHERE id = ${req.params.id}`)
      .then(cursor => {
        const user = cursor.rows[0];
        user.sexualPreferences = prefsCursor.rows;
        console.log(user)
        res.json(user);
      })
      .catch(err => console.log(err));
  });

  return router;
};

module.exports = userRouter;
