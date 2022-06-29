const { PORT = 8080 } = process.env;

const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());

app.use("/login", (req, res) => {
  res.send({
    token: "test123",
  });
});

app.listen(PORT, listener);

function listener() {
  console.log(`Listening on Port ${PORT}!`);
}
