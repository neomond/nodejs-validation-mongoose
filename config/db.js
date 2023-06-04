const { default: mongoose } = require("mongoose");
require("dotenv").config();

const db = {
  connect: async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("Mongoose connected!!");
    } catch (err) {
      console.error("Error connecting to MongoDB:", err);
    }
  },
};

module.exports = { db };
