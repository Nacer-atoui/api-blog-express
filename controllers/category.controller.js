const Category = require("../models/category.model");

const getAllCategory = (req, res) => {
    Category.findAll((error, results) => {
        if (error) {
            console.error("❌ Erreur lors de la requête SQL:", error.message);
            return res.status(500).json("Erreur serveur");
        }
        res.json(results);
    });
};

const getCategoryById = (req, res) => {
    const id = req.params.id;
    Category.findOne(id, (error, result) => {
        if (error) {
            console.error("❌ Erreur SQL:", error.message);
            return res.status(500).json("Erreur serveur");
        }
        if (!result || result.length === 0) {
            return res.status(404).json("Article non trouvé");
        }
        res.json(result[0]); // renvoyer un seul article
    });
};

const createCategory = (req, res) => {
    const { name } = req.body;
    const category = {
        name
    };

    Category.createOne(category, (error, result) => {

        if (error) {
            console.error("❌ Erreur SQL:", error.message);
            return res.status(500).json("Erreur serveur");
        }

        res.status(201).json({
            id: result.insertId,
            ...category
        });
    });
};

const updateCategory = (req, res) => {
    const { name } = req.body;
    const { id } = req.params;

    Category.updateOne(name, id, (error, result) => {
        if (error) {
            console.error("❌ Erreur lors de la requête SQL:", error.message);
            return res.status(500).json("Erreur serveur");
        }
        if (result.affectedRows === 0) {
            return res.status(404).json("Catégorie non trouvée");
        }
        res.json({ id: parseInt(id), name: name });
    })
}

const deleteCategory = (req, res) => {
    const { id } = req.params;

    Category.deleteOne( id, (error, result) => {
        if (error) {
            console.error("❌ Erreur lors de la requête SQL:", error.message);
            return res.status(500).json("Erreur serveur");
        }
        if (result.affectedRows === 0) {
            return res.status(404).json("Catégorie non trouvée");
        }
        res.json({ id: parseInt(id) });
    })
}

module.exports = {
    getAllCategory, getCategoryById, createCategory, updateCategory, deleteCategory
};