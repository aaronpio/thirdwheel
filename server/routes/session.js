const express = require("express");
const router = express.Router();
const { msleep } = require("sleep");

const sessionRouter = db => {
  router.post("/login", function(req, res) {
    msleep(500);
    const { email, password } = req.body;
    db.query(
      `SELECT id, email, password FROM users WHERE email = '${email}' AND password = '${password}'`
    )
      .then(cursor => {
        const { id } = cursor.rows[0];
        res.cookie("user-id", id).sendStatus(200);
      })
      .catch(err => console.log(err));
  });

  router.get("/logout", function(req, res) {
  });

  return router;
};

module.exports = sessionRouter;
