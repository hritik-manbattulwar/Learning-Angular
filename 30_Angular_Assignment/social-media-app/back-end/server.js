const express = require("express");
// import  express  from "express";
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

//configure dotenv
dotenv.config({ path: "./config/config.env" });

// Confiure cors
app.use(cors());

//configure express to accept json
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));

// connection to database
mongoose
  .connect(process.env.MONGO_DB_LOCAL_URL)
  .then((response) => {
    console.log("Connected to Mongo DB Successfully ...");
  })
  .catch((error) => {
    console.log(error);
    process.exit(1); // stop the node js process if unable to connect to mongodb
  });

//Configure Router
app.use("/user", require("./router/userRouter.js"));
app.get("/", (request, response) => {
  response.send(`<h2>Welcome to Codeheist Social Media Express Server</h2>`);
});
const hostname = process.env.HOSTNAME;
const port = process.env.PORT;
app.listen(port, hostname, () => {
  console.log(`Express Server is Started at http://${hostname}:${port}`);
});
