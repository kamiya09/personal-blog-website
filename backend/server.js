const express = require("express");
const app = express();
const port = 3030;

app.get("/", (req, res) => {
  res.send("Hello Wor1ld!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
