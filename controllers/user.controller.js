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

/**
 * Récupère un user spécifique par son ID
 * Route: GET /user/:id
 */
const getUserById = (req, res) => {
    const id = req.params.id;

    User.findById(id, (error, result) => {
        if (error) {
            console.error('❌ Erreur lors de la requête SQL:', error.message);
            return res.status(500).send('Erreur serveur.');
        }

        // Si aucun utilisateur n'est trouvé
        if (!result) {
            return res.status(404).json({ message: "Utilisateur non trouvé." });
        }

        res.json(result);
    });
};

/**
 * Met à jour un user
 * Route: PUT /user/:id
 */
const updateUser = (req, res) => {
    const id = req.params.id;
    const userData = req.body;

    // Validation simple
    if (!userData.firstname || !userData.lastname || !userData.email || !userData.password) {
        return res.status(400).send("Tous les champs sont requis pour la mise à jour.");
    }

    User.update(id, userData, (error, results) => {
        if (error) {
            console.error('❌ Erreur lors de la mise à jour:', error.message);
            return res.status(500).send('Erreur serveur.');
        }

        // results.affectedRows indique si une ligne a été modifiée
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: "Utilisateur non trouvé." });
        }

        res.json({ message: "Utilisateur mis à jour avec succès.", id, details: userData });
    });
};

module.exports = { 
    createUser,
    getAllUser,
    getUserById,
    updateUser
};