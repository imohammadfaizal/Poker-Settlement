const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, default: Date.now },
  players: [{ type: mongoose.Schema.Types.ObjectId, ref: "Player" }],
});

module.exports = mongoose.model("Game", gameSchema);
