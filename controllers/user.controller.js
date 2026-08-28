const User = require('../models/user.model'); 

/**
 * Crée un nouveau user dans la base de données.
 * Route: POST /user
 */
const createUser = (req, res) => {
    const userData = req.body; 

    // Validation simple 
    if (!userData.firstname || !userData.lastname || !userData.email || !userData.password) {
        return res.status(400).json("Les champs 'firstname', 'lastname', 'email' et 'password' sont requis.");
    }

    User.create(userData, (error, results) => {
        if (error) {
            console.error('❌ Erreur lors de la requête SQL (Création):', error.message);
            return res.status(500).json('Erreur serveur lors de la création du user.');
        }

        // Succès: Renvoie l'ID du user créé
        res.status(201).json({
            message: "User créé avec succès.",
            id: results.insertId,
            details: userData
        });
    });
};

/**
 * Récupère tous les user
 */
const getAllUser = (req, res) => {
    User.findAll((error, results) => {
        if (error) {
            console.error('❌ Erreur lors de la requête SQL:', error.message);
            return res.status(500).json('Erreur serveur lors de la récupération des user.');
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
            return res.status(500).json('Erreur serveur.');
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
        return res.status(400).json("Tous les champs sont requis pour la mise à jour.");
    }

    User.update(id, userData, (error, results) => {
        if (error) {
            console.error('❌ Erreur lors de la mise à jour:', error.message);
            return res.status(500).json('Erreur serveur.');
        }

        // results.affectedRows indique si une ligne a été modifiée
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: "Utilisateur non trouvé." });
        }

        res.json({ message: "Utilisateur mis à jour avec succès.", id, details: userData });
    });
};

/**
 * Supprime un user
 * Route: DELETE /user/:id
 */
const deleteUser = (req, res) => {
    const id = req.params.id;

    User.remove(id, (error, results) => {
        if (error) {
            console.error('❌ Erreur lors de la suppression:', error.message);
            return res.status(500).json('Erreur serveur lors de la suppression.');
        }

        if (results.affectedRows === 0) {
            return res.status(404).json({ message: "Utilisateur non trouvé." });
        }

        res.json({ message: "Utilisateur supprimé avec succès." });
    });
};

module.exports = { 
    createUser,
    getAllUser,
    getUserById,
    updateUser,
    deleteUser
};