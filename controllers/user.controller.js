const User = require('../models/user.model'); 

/**
 * Crée un nouveau user dans la base de données.
 * Route: POST /user
 */
const createUser = (req, res) => {
    const userData = req.body; 

    // Validation simple 
    if (!userData.firstname || !userData.lastname || !userData.email || !userData.password) {
        return res.status(400).send("Les champs 'firstname', 'lastname', 'email' et 'password' sont requis.");
    }

    User.create(userData, (error, results) => {
        if (error) {
            console.error('❌ Erreur lors de la requête SQL (Création):', error.message);
            return res.status(500).send('Erreur serveur lors de la création du bien.');
        }

        // Succès: Renvoie l'ID du bien créé
        res.status(201).json({
            message: "Bien créé avec succès.",
            id: results.insertId,
            details: userData
        });
    });
};

/**
 * Récupère tous les biens
 */
const getAllUser = (req, res) => {
    User.findAll((error, results) => {
        if (error) {
            console.error('❌ Erreur lors de la requête SQL:', error.message);
            return res.status(500).send('Erreur serveur lors de la récupération des biens.');
        }
        res.json(results);
    });
};

module.exports = { 
    createUser,
    getAllUser   
};