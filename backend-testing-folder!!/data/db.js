const knex = require("knex");
const knexConfig = require("../knexfile");
const db = knex(knexConfig.development);

module.exports = {
  find,
  insert
};

function find() {
  return db("users");
}

function insert(user) {
  return db("users").insert(user);
}
