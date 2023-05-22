const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const data = await mongoose.connect(
      "mongodb://localhost:27017/librarymanagerapp",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    if (data) console.log("Connected to Mongo DB!");
  } catch (err) {
    console.log("DB connection error", err);
  }
};

module.exports = connectDb;