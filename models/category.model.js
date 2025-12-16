const db = require("../config/database");

const findAll = (callback) => {
    const sql = "SELECT * FROM category";
    db.query(sql, callback);
};

const findOne = (id, callback) => {
    const sql = "SELECT * FROM category WHERE id = ?";
    db.query(sql, [id], callback);
};

const createOne = (category, callback) => {
    const sql = `
        INSERT INTO category 
        (name) 
        VALUES (?)
    `;

    db.query(sql, [
        category.name
    ], callback);
};

// Ajouter autres requêtes du CRUD
module.exports = {
    findAll, findOne, createOne
};