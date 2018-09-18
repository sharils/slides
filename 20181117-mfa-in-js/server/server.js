const fs = require("fs");
const https = require("https");
const path = require("path");
const app = require("./app");

const { PORT = 8000 } = process.env;

const cert = fs.readFileSync("../local-cert-generator/server.crt");
const key = fs.readFileSync("../local-cert-generator/server.key");

https
  .createServer({ cert, key }, app)
  .listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
