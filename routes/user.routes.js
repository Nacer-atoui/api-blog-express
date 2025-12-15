const express = require("express");
const router = express.Router();

const {
    createUser,   
} = require("../controllers/user.controller"); 

// POST /  Crée un nouveau user
router.post("/", createUser);

module.exports = router;