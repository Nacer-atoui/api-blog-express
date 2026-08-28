const db = require("../config/database");

const findAll = (callback) => {
  const sql = "SELECT * FROM articles";
  db.query(sql, callback);
};

const findById = (id, callback) => {
  const sql = "SELECT * FROM articles WHERE id=?";
  db.query(sql, [id], callback);
};
const create = (title, content, category_id, callback) => {
  const sql = `INSERT INTO articles(title,content,category_id) VALUES (?,?,?)`;
  db.query(sql, [title, content, category_id], (error, result) => {
    callback(error, result);
  });
};
const deleteOne = (id, callback) => {
  const sql = `DELETE FROM articles WHERE id = ?`;
  db.query(sql, [id], callback);
};
const update = (title, content, category_id, id, callback) => {
  const sql = `UPDATE articles SET title=?,content=?,category_id=? WHERE id = ?`;
  db.query(sql, [title, content, category_id, id],callback);
};

module.exports = {
  findAll,
  findById,
  create,
  deleteOne,
  update,
};
