const db = require("../config/database");

const findAll = (callback) => {
  const sql = "SELECT * FROM article";
  db.query(sql, callback);
};

const findById = (id, callback) => {
  const sql = "SELECT * FROM article WHERE id=?";
  db.query(sql, [id], callback);
};

module.exports = {
  findAll,
  findById,
};
