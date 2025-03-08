import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
import {User}  from "../models.js";

mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const removeUsers = async () => {
  try {
    await User.deleteMany({});
    console.log("All users deleted successfully");
  } catch (error) {
    console.error("Error deleting users data:", error);
  }
};

await removeUsers();