#!/usr/bin/env node
const crypto = require("crypto");
const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const hole = [];

function sha512() {
  const hash = crypto.createHash("sha512");
  hash.update(String(Date.now()));
  return hash.digest("hex");
}

function random(n) {
  return [...Array(n)].map(sha512).join("");
}

function leak() {
  hole.push(random(100));
}

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

server.listen(port, hostname, () => {
  setInterval(leak, 1);
  console.log(`Server running at http://${hostname}:${port}/`);
});
