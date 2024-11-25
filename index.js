require("dotenv").config();

const app = require("./src/app");

const port = 3001;

app
  .on("error", (err) => {
    console.error("Error:", err.message);
  });
