const bcrypt = require("bcrypt");
const User = require("../models/user.model");


const register = (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    
    User.create(firstname, lastname, email, hashedPassword, (error, result) => {
        if (error) {
            if (error.code === "ER_DUP_ENTRY") {
                return res.status(409).send("Email déjà utilisé");
            }
            return res.status(500).send("Erreur serveur : " + error.message);
        }
        res.status(201).json({ id: result.insertId, email });
    });
};