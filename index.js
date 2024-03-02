const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h2>i am backed</h2>");
});

app.listen(5000, () => console.log(`server listing`));
