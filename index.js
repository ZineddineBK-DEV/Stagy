import express from "express";

import dotenv from "dotenv";
dotenv.config();
import  http  from "http";
import connectDB from "./db/connect.js";
import cors from "cors";

import authRoute from "./routes/authRoutes.js";



const app = express();

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Server Running!");
  });

app.use("/api/v1/auth", authRoute);






const port = 5000;
const server = http.createServer(app);
const start = async() => {
    try {
      await connectDB(process.env.MONGO_URI);
      server.listen(port, () =>
        console.log(`Server Running on port : ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };





start();
