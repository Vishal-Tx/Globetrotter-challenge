import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
import {Destination}  from "../models.js";
import data from "../data.js";

mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const seedDatabase = async () => {
  try {
    await Destination.deleteMany({});
    for (const item of data) {
      const p = new Destination({
          city: item.city,
          country: item.country,
          clues: item.clues,
          funFacts: item.fun_fact,
          trivia: item.trivia
      });
      await p.save();
    }
    console.log("Database enriched successfully");
  } catch (error) {
    console.error("Error enriching database:", error);
  }
};

await seedDatabase();