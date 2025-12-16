const db = require('../config/database');

const create = (likeData, callback) => {
  const sql = "INSERT INTO article_user_like (user_id, article_id) VALUES (?, ?)";


  const values = [likeData.user_id, likeData.article_id];


  db.query(sql, values, callback);
};



const remove = (user_id, article_id, callback) => {

  const sql = "DELETE FROM article_user_like WHERE user_id = ? AND article_id = ?";

  const values = [user_id, article_id];

  db.query(sql, values, callback);


}

module.exports = {
  create, remove
};
