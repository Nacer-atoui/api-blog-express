const Like = require("../models/like.model");
//ajoute un like avec la methode POST
const createLike = (req, res) => {
   
    const { user_id, article_id } = req.body;

    // 2. Vérification
    if (!user_id || !article_id) {
        console.log(`user_id ou article_id invalides.`);

        return res.status(400).json({
            message: "Données manquantes",
            received: { user_id, article_id },
        });
    }

    // 4. Appel au modèle
    Like.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({
            message: "Like créé avec succès",
            details: result,
        });
    });
};

// supprime un like avec la methode DELETE
const unlikeArticle = (req, res) => {

    const article_id = req.params.id;
    const { user_id } = req.body;

    // 1. Vérification
    if (!user_id || !article_id) {
        return res.status(400).json({
            message: "Paramètres manquants (user_id ou article_id)"
        });
    }


    Like.remove(user_id, article_id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }


        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Like non trouvé ou déjà supprimé"
            });
        }

        res.json({
            message: "Like supprimé avec succès (Unlike)",
            article_id: article_id,
            user_id: user_id
        });
    });
};

module.exports = {
    createLike,
    unlikeArticle
};
