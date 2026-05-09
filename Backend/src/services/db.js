const mongoose = require("mongoose");

async function connectDB() {
  await mongoose.connect(process.env.MONGO_URI);
  try {
    console.log("Connected to database");
  } catch (error) {
    console.log("Error connecting to database", error);
  }
}

module.exports = connectDB;
