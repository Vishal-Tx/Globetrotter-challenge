import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
import {Question, Destination}  from "../models.js";
import data from "../data.js";

mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const enrichDatabase = async () => {
  try {
    await Question.deleteMany({});
   const allDestinations = await Destination.find();

    for (const item of allDestinations) {
      const p = new Question({
          clues: item.clues,
          destination_id: item._id,
      });
      await p.save();
    }
    console.log("Questions Database enriched successfully");
  } catch (error) {
    console.error("Error enriching questions database:", error);
  }
};

await enrichDatabase();