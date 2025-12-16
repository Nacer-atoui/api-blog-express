const db = require('../config/database');

/**
 * Récupère tous les users de la table 'user'.
 * @param {function} callback - Fonction de rappel (error, results).
 */
const findAll = (callback) => {
    const sql = 'SELECT * FROM user';
    db.query(sql, callback);
};

/**
 * Crée un nouveau user dans la table 'user'.
 * @param {object} userData - Les données du user (firstname, lastname, email, password).
 * @param {function} callback - Fonction de rappel (error, results).
 */
const create = (userData, callback) => {
    const sql = `
        INSERT INTO user 
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
    const sql = 'SELECT * FROM user WHERE id = ?';
    db.query(sql, [id], (error, results) => {
        // results est un tableau, on renvoie le premier élément s'il existe
        callback(error, results[0]); 
    });
};

module.exports = {
    create,
    findAll,
    findById
    // Autres fonctions 
};
