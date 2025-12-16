require("dotenv").config();
require("./config/database");

const express = require("express");
const app = express();


app.use(express.json());


const likeRoutes = require("./routes/like.routes");


app.use("/like", likeRoutes);

app.get("/health", (req, res) => res.json({ status: "ok" }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
