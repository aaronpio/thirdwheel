const express = require("express");
const router = express.Router();
const { msleep } = require("sleep");

const sessionRouter = db => {
  router.post("/login", function(req, res) {
    const { email, password } = req.body;
    console.log(`SELECT id, email, password FROM users WHERE email = '${email}' AND password = '${password}'`)
    db.query(
      `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`
    )
      .then(cursor => {
        console.log("CURSOR:", cursor)
        const user = cursor.rows[0];
        res.cookie("user-id", user.id).json(user);
      })
      .catch(err => console.log(err));
  });

  router.get("/logout", function(req, res) {});

  return router;
};

module.exports = sessionRouter;
