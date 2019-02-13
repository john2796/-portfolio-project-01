const express = require("express");
const router = express.Router();
const db = require("../../data/db");

const getAllItems = (req, res) => {
  db.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json({ message: "Something went wrong on the server!" });
    });
};
// @route    GET api/users
// @desc     Fetch All Post
// @Access   Public
router.get("/", (req, res) => {
  getAllItems(req, res);
});
// @route    POST api/users
// @desc     POST single user
// @Access   Public
router.post("/", (req, res) => {
  const { name, bio } = req.body;
  db.insert({ name, bio })
    .then(users => {
      getAllItems(req, res);
    })
    .catch(err => {
      res.status(500).json({ message: "Something went wrong on the server!" });
    });
});
// @route    POST api/users
// @desc     POST single user
// @Access   Public
router.post("/", (req, res) => {
  const { name, bio } = req.body;
  db.insert({ name, bio })
    .then(users => {
      getAllItems(req, res);
    })
    .catch(err => {
      res.status(500).json({ message: "Something went wrong on the server!" });
    });
});

module.exports = router;
