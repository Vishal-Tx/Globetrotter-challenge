import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import routes from "./routes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
   .then(() => console.log("MongoDB Connected"))
   .catch(err => console.error(err));

app.use("/api", routes);
app.use((req, res, next) => {
   res.status(404).json({
      success: false,
      message: "Route not found"
   });
});
app.listen(5000, () => console.log("Server running on port 5000"));
