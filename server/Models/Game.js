const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  playerName: { type: String, required: true },
  playerBootAmt: { type: Number, required: true },
  playerFinalAmt: { type: Number, required: true },
});

const gameSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, default: Date.now },
  players: [playerSchema],
});

module.exports = mongoose.model("Game", gameSchema);
