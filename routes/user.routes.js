const express = require("express");
const router = express.Router();

const {
    createUser,
    getAllUser,   
} = require("../controllers/user.controller"); 

// POST /  Crée un nouveau user
router.post("/", createUser);

// GET /  Récupère tous les user 
router.get("/", getAllUser);

module.exports = router;