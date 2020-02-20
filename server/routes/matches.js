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

  router.get("/dates/:id", function(req, res) {
    msleep(500);
    db.query(
      SQL`SELECT * FROM matches JOIN users u1 ON user1_id = u1.id JOIN users u2 ON user2_id = u2.id WHERE ${req.params.id} = user1_id OR ${req.params.id} = user2_id
      `
    )
      .then(_res => res.json(_res.rows))
      .catch(err => console.log(err));
  });

  router.get("/:id", function(req, res) {
    msleep(500);
    db.query(
      SQL`SELECT matches.id as match_id, u1.name as matchee1_name, u1.image_url matchee1_image_url, u2.name as matchee2_name, u2.image_url as matchee2_image_url FROM matches JOIN users u1 ON user1_id = u1.id JOIN users u2 ON user2_id = u2.id WHERE matchmaker_id = ${req.params.id}`
    )
      .then(_res => res.json(_res.rows))
      .catch(err => console.log(err));
  });

  return router;
};

module.exports = matchesRouter;
