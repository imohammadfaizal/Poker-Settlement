const express = require("express");
const router = express.Router();
const Player = require("../Models/Player");
const Game = require("../Models/Game");

router.post("/addPlayer", async (req, res) => {
  const { name, finalAmount, gameId } = req.body;

  try {
    const newPlayer = new Player({ name, finalAmount, gameId });
    const savedPlayer = await newPlayer.save();

    await Game.findByIdAndUpdate(gameId, { $push: { players: savedPlayer._id } });

    res.status(201).json(savedPlayer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
