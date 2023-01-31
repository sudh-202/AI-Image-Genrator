import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
// const cors = require('cors');
// const express = require('express');


import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from './routes/dalleRoutes.js';


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get("/", async (req, res) => {
  res.send("Hello Server");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () =>
      console.log(
        "Server has started on port https://ai-image-3ng8.onrender.com"
      )
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
