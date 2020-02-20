const express = require("express");
const router = express.Router();
const { msleep } = require("sleep");

const sessionRouter = db => {
  router.post("/login", function(req, res) {
    const { email, password } = req.body;
    db.query(
      `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`
    )
      .then(async userCursor => {
        const user = userCursor.rows[0];
        console.log("before:", user);
        const sexualPrefsCursor = await db.query(
          `SELECT name FROM sexual_preferences JOIN genders ON genders.id = gender_id WHERE user_id = ${user.id}`
        );
        user.sexualPreferences = sexualPrefsCursor.rows;
        console.log("after:", user);
        res.cookie("user-id", user.id).json(user);
      })
      .catch(err => console.log(err));
  });

  return router;
};

module.exports = sessionRouter;
