const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();

//middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Car Doctor is running");
});

app.listen(port, () => {
  console.log(`Car Doctor server is running on port ${port}`);
});
