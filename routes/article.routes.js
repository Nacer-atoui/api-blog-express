const express = require("express");
const router = express.Router();

const{
    getAllArticles,
    getArticleById
    
    
} = require ("../controllers/article.controller");

router.get("/",getAllArticles);
router.get("/:id",getArticleById);

module.exports = router;
