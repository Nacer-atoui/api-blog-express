const articles = require("../models/article.model");

const createArticles = (req, res) => {
  const { title, content, category_id } = req.body;
  articles.create(title, content, category_id, (error, result) => {
    if (error) {
      console.error;
      "erreur lors de la requete SQL:", error.message;
      return res.status(500).json("Erreur serveur");
    }
    res.status(201).json({ id: result.insertId, title, content, category_id });
  });
};

const getAllArticles = (req, res) => {
  articles.findAll((error, result) => {
    if (error) {
      console.error("erreur lors de la requete SQL:", error.message);
      return res.status(500).json("Erreur serveur");
    }
    res.json(result);
  });
};
const getArticleById = (req, res) => {
  const { id } = req.params;
  articles.findById(id, (error, result) => {
    if (error) {
      console.error("erreur lors de la requete SQL:", error.message);
      return res.status(500).json("Erreur serveur");
    }
    res.json(result);
  });
};
const deleteArticle = (req, res) => {
  const { id } = req.params;
  articles.deleteOne(id, (error, result) => {
    if (error) {
      console.error("erreur lors de la requete SQL:", error.message);
      return res.status(500).json("Erreur serveur");
    }
    res.json(result);
  });
};
const updateArticle = (req, res) => {
  const { id } = req.params;
  const { title, content, category_id } = req.body;
  articles.update(title, content, category_id, id, (error, result) => {
    if (error) {
      console.error("erreur lors de la requete SQL:", error.message);
      return res.status(500).json("Erreur serveur");
    }
    res.json({ id: result.insertId, title, content, category_id });
  });
};
module.exports = {
  getAllArticles,
  getArticleById,
  createArticles,
  deleteArticle,
  updateArticle,
};
