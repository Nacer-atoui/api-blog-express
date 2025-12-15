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

module.exports = {
    create,
    findAll
    // Autres fonctions 
};
