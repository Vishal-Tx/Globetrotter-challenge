import mongoose from "mongoose";

const DestinationSchema = new mongoose.Schema({
   city: String,
   country: String,
   clues: [String],
   funFacts: [String],
   trivia: [String]
 });

 const QuestionSchema = new mongoose.Schema({
   clues: [String],
   destination_id: String,
 })

const UserSchema = new mongoose.Schema({
   username: String,
   score: { type: Number, default: 0 },
});

export const Destination = mongoose.model("Destination", DestinationSchema);
export const Question = mongoose.model('Question',QuestionSchema)
export const User = mongoose.model("User", UserSchema);
