const express = require("express");
const router = express.Router();
const db = require("../../data/db");

router.get("/", (req, res) => {
  db.find()
    .then(users => {
      res.status(200).json({ success: true, users });
    })
    .catch(err => {
      res.status(500).json({ message: "Something went wrong on the server!" });
    });
});

router.post("/", (req, res) => {
  const { name, bio } = req.body;
  db.insert({ name, bio })
    .then(users => {
      res.status(200).json({ success: true, users });
    })
    .catch(err => {
      res.status(500).json({ message: "Something went wrong on the server!" });
    });
});

module.exports = router;
