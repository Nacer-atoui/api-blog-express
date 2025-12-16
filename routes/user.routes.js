const express = require("express");
const router = express.Router();

const {
    createUser,
    getAllUser,
    getUserById,
    updateUser
} = require("../controllers/user.controller"); 

// POST /  Crée un nouveau user
router.post("/", createUser);

// GET /  Récupère tous les user 
router.get("/", getAllUser);

// GET /:id  Récupère un user par son ID
router.get("/:id", getUserById);

// PUT /:id  Met à jour un user
router.put("/:id", updateUser);

module.exports = router;