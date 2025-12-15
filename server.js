require("dotenv").config();
const express = require("express");
const app = express();

require("./config/database");
const categoryRouter = require('./routes/category.routes');

const userRouter = require('./routes/user.routes'); 

// Middleware pour lire le JSON
app.use(express.json());


app.use('/category', categoryRouter);

// Route de test
app.get("/health", (req, res) => {
    res.json({ status: "ok" });
});

// user
app.use('/user', userRouter);

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});