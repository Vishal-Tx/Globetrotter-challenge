import express from "express";
import { Destination, User, Question } from "./models.js";

const router = express.Router();
router.get("/destination", async (req, res) => {

   const allDestinations = await Destination.find();
   const randomDestination = allDestinations[Math.floor(Math.random() * allDestinations.length)];

   let options = [randomDestination.city];
   while (options.length < 4) {
      const randomOption = allDestinations[Math.floor(Math.random() * allDestinations.length)].city;
      if (!options.includes(randomOption)) {
         options.push(randomOption);
      }
   }
   
   options.sort(() => Math.random() - 0.5);
const question = await Question.findOne({destination_id:randomDestination.id})
   res.json({
      id:question._id,
      destination_id: question.destination_id,
      clues:question.clues,
      options,
   });
});


router.get("/", async (req, res) => {
    
    res.json({ message: "Welcome to the Travel Quiz API!" });
 });

router.post("/answer", async (req, res) => {
   const { username, destination_id, answer } = req.body;
   const user = await User.findOne({ username }) || new User({ username });
   const destination = await Destination.findOne({_id:destination_id})

   if (destination.city === answer) {
      user.score += 10;
      await user.save();
      res.json({ correct: true, funFact: destination.funFacts[Math.floor(Math.random()*2)], score: user.score });
   } else {
      res.json({ correct: false, funFact: destination.funFacts[Math.floor(Math.random()*2)], score: user.score });
   }
});

export default router;
