const express = require("express");
const router = express.Router();

const{
    getAllArticles,
    getArticleById,
    createArticles,
    deleteArticle
    
    
} = require ("../controllers/article.controller");

router.get("/",getAllArticles);
router.get("/:id",getArticleById);
router.post("/",createArticles)
router.delete("/:id",deleteArticle)

module.exports = router;
