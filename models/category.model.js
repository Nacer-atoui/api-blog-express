const db = require("../config/database");

const findAll = (callback) => {
    const sql = "SELECT * FROM category";
    db.query(sql, callback);
};

const findOne = (id, callback) => {
    const sql = "SELECT * FROM category WHERE id = ?";
    db.query(sql, [id], callback);
};

// Ajouter autres requêtes du CRUD
module.exports = {
    findAll, findOne
};