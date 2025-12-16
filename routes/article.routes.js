const express = require("express");
const router = express.Router();

const{
    getAllArticles,
    getArticleById,
    createArticles
    
    
} = require ("../controllers/article.controller");

router.get("/",getAllArticles);
router.get("/:id",getArticleById);
router.post("/",createArticles)

module.exports = router;
