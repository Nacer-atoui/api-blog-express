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



module.exports = {
    getAllCategory,
};