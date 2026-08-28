const db = require('../config/database');

/**
 * Récupère tous les users de la table 'user'.
 * @param {function} callback - Fonction de rappel (error, results).
 */
const findAll = (callback) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, callback);
};

/**
 * Crée un nouveau user dans la table 'user'.
 * @param {object} userData - Les données du user (firstname, lastname, email, password).
 * @param {function} callback - Fonction de rappel (error, results).
 */
const create = (userData, callback) => {
    const sql = `
        INSERT INTO users 
        (firstname, lastname, email, password) 
        VALUES (?, ?, ?, ?)
    `;
    
    const values = [
        userData.firstname,
        userData.lastname,
        userData.email,
        userData.password,
    ];

    db.query(sql, values, callback);
};

/**
 * Récupère un user par son ID.
 * @param {number} id - L'identifiant du user.
 * @param {function} callback - Fonction de rappel (error, results).
 */
const findById = (id, callback) => {
    const sql = 'SELECT * FROM users WHERE id = ?';
    db.query(sql, [id], (error, results) => {
        // results est un tableau, on renvoie le premier élément s'il existe
        callback(error, results[0]); 
    });
};

/**
 * Met à jour un user existant.
 * @param {number} id - L'ID du user à modifier.
 * @param {object} userData - Les nouvelles données.
 * @param {function} callback - Fonction de rappel.
 */
const update = (id, userData, callback) => {
    const sql = `
        UPDATE users 
        SET firstname = ?, lastname = ?, email = ?, password = ? 
        WHERE id = ?
    `;
    
    const values = [
        userData.firstname,
        userData.lastname,
        userData.email,
        userData.password,
        id
    ];

    db.query(sql, values, callback);
};

/**
 * Supprime un user de la table 'user'.
 * @param {number} id - L'ID du user à supprimer.
 * @param {function} callback - Fonction de rappel.
 */
const remove = (id, callback) => {
    const sql = 'DELETE FROM users WHERE id = ?';
    db.query(sql, [id], callback);
};

module.exports = {
    create,
    findAll,
    findById,
    update,
    remove
};
