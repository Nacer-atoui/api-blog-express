require("dotenv").config();
require("./config/database");

const express = require("express");
const app = express();
const db = require("./config/database")
const articleRoutes = require("./routes/article.routes")

require("./config/database");
const categoryRouter = require('./routes/category.routes');
const userRouter = require('./routes/user.routes'); 


app.use(express.json());

app.use("/articles", articleRoutes);

// Route de test salut
app.get("/health", (req, res) => {
    res.json({ status: "ok" });
});

// user
app.use('/user', userRouter);

const likeRoutes = require("./routes/like.routes");


app.use("/like", likeRoutes);

// category
app.use('/category', categoryRouter);

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
