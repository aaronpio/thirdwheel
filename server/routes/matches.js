const express = require("express");
const router = express.Router();
const { msleep } = require("sleep");
const { SQL } = require("sql-template-strings");

const matchesRouter = db => {
  router.post("/new", function(req, res) {
    msleep(500);
    const { matchmakerId, user1Id, user2Id } = req.body;
    db.query(
      SQL`INSERT INTO matches (matchmaker_id, user1_id, user2_id) VALUES
                 (${matchmakerId}, ${user1Id}, ${user2Id})`
    )
      .then(() => res.sendStatus(200))
      .catch(err => console.log(err));
  });

  router.get("/:id", function(req, res) {
    msleep(500);
    db.query(
      SQL`SELECT * FROM matches WHERE ${req.params.id} = user1_id OR ${req.params.id} = user2_id`
    )
      .then(_res => res.json(_res.rows))
      .catch(err => console.log(err));
  });

  return router;
};

module.exports = matchesRouter;
