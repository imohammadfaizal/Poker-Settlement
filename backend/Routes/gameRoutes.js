const express = require("express");
const router = express.Router();
const Game = require("../Models/Game");

router.post("/addGame", async (req, res) => {
  const { name, date } = req.body;

  try {
    const newGame = new Game({ name, date });
    const savedGame = await newGame.save();
    res.status(201).json(savedGame);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/getGames", async (req, res) => {
  try {
    const games = await Game.find();
    res.status(200).json(games);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;
