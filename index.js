const express = require("express");
const json = require("express").json;
const cors = require("cors");

const app = express();
app.use(json());
app.use(cors());

app.post("/test-hooks", (req, res) => {
  console.log("DATA", req.body);
  console.log("REQ DATA====", req);
  res.status(200).send("SUCCESS");
});

app.listen(4000, () => console.log("Listening to port 4000"));
