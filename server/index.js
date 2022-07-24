import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import bugRoutes from "./routes/bugs.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());
app.use("/bugs", bugRoutes);

const port = process.env.PORT || 5000;

mongoose
  .connect(
    "mongodb+srv://admin:GbvBzrWRwbjnZ74S@cluster0.skffq.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(port, () => {
      console.log(`Express server running on port ${port}`);
    });
  })
  .catch((error) => console.log(error));
