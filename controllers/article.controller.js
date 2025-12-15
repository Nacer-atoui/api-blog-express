const article = require("../models/article.model");

const getAllArticles = (req, res) => {
    article.findAll((error,result) =>{
        if(error) {
            console.error("erreur lors de la requete SQL:",error.message);
            return res.status(500).send("Erreur serveur");
        }
            res.json(result);

    }
    )
   
};
const getArticleById = (req,res) =>{
    const {id} = req.params
    article.findById(id,(error,result) => {
        if(error){
            console.error("erreur lors de la requete SQL:", error.message);
            return res.status(500).send("Erreur serveur");
        }
        res.json(result);
    })
};
 module.exports = {
      getAllArticles,
      getArticleById,
    };