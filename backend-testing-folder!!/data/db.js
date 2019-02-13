const knex = require("knex");
const knexConfig = require("../knexfile");
const db = knex(knexConfig.development);

module.exports = {
  find,
  insert,
  findById,
  update,
  remove
};
function find() {
  return db("users");
}
function findById(id) {
  return db("users").where({ id: Number(id) });
}
function insert(users) {
  return db("users")
    .insert(users)
    .then(ids => ({ id: ids[0] }));
}
function update(id, post) {
  return db("users")
    .where("id", Number(id))
    .update(post);
}
function remove(id) {
  return db("users")
    .where("id", Number(id))
    .del();
}
