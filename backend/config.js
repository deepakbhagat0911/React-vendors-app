require("dotenv").config();
const mongoose = require("mongoose");

const dbUrl = process.env.DATABASE;
exports.mongodb = async () => {
  try {
    await mongoose.connect(dbUrl);
    console.log("mongoDB conected successfully");
  } catch (err) {
    console.log(err.message);
  }
};
