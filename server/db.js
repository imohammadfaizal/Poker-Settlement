const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) {
      throw new Error("Set env variable first u dubmbasss");
    }

    await mongoose.connect(uri);
    console.log("MongoDB connected...");
  } catch (error) {
    console.error("Server Made a Boo Boo:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
