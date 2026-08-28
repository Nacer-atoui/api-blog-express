const bcrypt = require("bcrypt");
const User = require("../models/user.model");

exports.register = (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    
    User.create(firstname, lastname, email, hashedPassword, (error, result) => {
        if (error) {
            if (error.code === "ER_DUP_ENTRY") {
                // Remplacement de send() par json()
                return res.status(409).json({ message: "Email déjà utilisé" });
            }
            // Remplacement de send() par json()
            return res.status(500).json({ message: "Erreur serveur : " + error.message });
        }
        res.status(201).json({ id: result.insertId, email });
    });
};