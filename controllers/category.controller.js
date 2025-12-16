const Category = require("../models/category.model");

const getAllCategory = (req, res) => {
    Category.findAll((error, results) => {
        if (error) {
            console.error("❌ Erreur lors de la requête SQL:", error.message);
            return res.status(500).send("Erreur serveur");
        }
        res.json(results);
    });
};

const getCategoryById = (req, res) => {
    const id = req.params.id;
    Category.findOne(id, (error, result) => {
        if (error) {
            console.error("❌ Erreur SQL:", error.message);
            return res.status(500).send("Erreur serveur");
        }
        if (!result || result.length === 0) {
            return res.status(404).send("Article non trouvé");
        }
        res.json(result[0]); // renvoyer un seul article
    });
};



module.exports = {
    getAllCategory, getCategoryById
};