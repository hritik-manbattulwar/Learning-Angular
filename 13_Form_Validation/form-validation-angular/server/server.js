const express = require("express");
const app = express();
const dotEnv = require("dotenv");
const cors = require("cors");

//configure express with cors
app.use(cors());

//config env
dotEnv.config({ path: "./config/config.env" });

const port = process.env.PORT;
const hostname = process.env.HOST_NAME;

//configure express to accept the form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//default
app.get("/", (req, res) => {
  res.send(`<h2>Welcome to Express Server</h2>`);
});

//configure Router
app.use("/user", require("./router/userRouter"));

//listen
app.listen(port, hostname, () => [
  console.log(`Express Server Started at: http://${hostname}:${port}`),
]);
