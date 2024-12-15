const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  finalAmount: { type: Number, required: true },
  gameId: { type: mongoose.Schema.Types.ObjectId, ref: "Game" },
});

module.exports = mongoose.model("Player", playerSchema);
