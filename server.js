require("dotenv").config();
const express = require("express");
const cors = require('cors');
const app = express();
const db = require("./config/database")
const authRoutes = require("./routes/auth.routes");
const articleRoutes = require("./routes/article.routes")

require("./config/database");
const categoryRouter = require('./routes/category.routes');
const userRouter = require('./routes/user.routes'); 

app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:8080",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


// Middleware pour lire le JSON
app.use(express.json());

app.use("/articles", articleRoutes);

// Route de test
app.get("/health", (req, res) => {
    res.json({ status: "ok" });
});

// user
app.use('/user', userRouter);

// category
app.use('/category', categoryRouter);

// Authentification
app.use("/auth", authRoutes);

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});