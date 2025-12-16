const express = require("express");
const router = express.Router();

const {
    createUser,
    getAllUser,
    getUserById   
} = require("../controllers/user.controller"); 

// POST /  Crée un nouveau user
router.post("/", createUser);

// GET /  Récupère tous les user 
router.get("/", getAllUser);

// GET /:id  Récupère un user par son ID
router.get("/:id", getUserById);

module.exports = router;