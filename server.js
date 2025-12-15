require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./config/database")
const articleRoutes = require("./routes/article.routes")

require("./config/database");

// Middleware pour lire le JSON
app.use(express.json());

app.use("/articles", articleRoutes);
app.use("/articles/:id", articleRoutes);

// Route de test
app.get("/health", (req, res) => {
    res.json({ status: "ok" });
});

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});