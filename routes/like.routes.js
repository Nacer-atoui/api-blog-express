const express = require('express');
const router = express.Router();

const likeController = require("../controllers/like.controller");

router.post('/', likeController.createLike);
router.delete('/:id', likeController.unlikeArticle);

module.exports = router;