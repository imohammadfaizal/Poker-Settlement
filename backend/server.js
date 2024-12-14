const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db");
const cors = require("cors");

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/games", require("./Routes/gameRoutes"));
app.use("/api/players", require("./Routes/playerRoutes"));

app.get("/", (req, res) => res.send("API is fuckin running...YoooooHoooooo"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
