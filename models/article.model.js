const db = require("../config/database");

const findAll = (callback) => {
  const sql = "SELECT * FROM article";
  db.query(sql, callback);
};

const findById = (id, callback) => {
  const sql = "SELECT * FROM article WHERE id=?";
  db.query(sql, [id], callback);
};
const create = (title, content, category_id, callback) => {
  const sql = `INSERT INTO article(title,content,category_id) VALUES (?,?,?)`;
  db.query(sql, [title, content, category_id], (error, result) => {
    callback(error, result);
  });
};
const deleteOne = (id, callback) => {
  const sql = `DELETE FROM article WHERE id = ?`;
  db.query(sql, [id], callback);
};

module.exports = {
  findAll,
  findById,
  create,
  deleteOne,
};
