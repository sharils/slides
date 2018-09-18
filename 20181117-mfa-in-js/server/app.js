const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const u2f = require("u2f");
const app = express();

app.use(cors());
app.use(bodyParser.json());

const { APP_ID = "https://localhost:3000" } = process.env;

const memoryStorage = {
  "user@example.com": {}
};

app.options("*", cors());

app.get("/u2f/request/1", (req, res) => {
  const registrationRequest = u2f.request(APP_ID);

  console.log({ url: req.url, memoryStorage, registrationRequest });

  memoryStorage["user@example.com"].registrationRequest = registrationRequest;

  res.send(registrationRequest);
});

app.post("/u2f/checkRegistration/2", ({ body: registrationResponse, url }, res) => {
  console.log({
    url,
    registrationResponse,
    memoryStorage
  });

  const { registrationRequest } = memoryStorage["user@example.com"];

  const registrationResult = u2f.checkRegistration(
    registrationRequest,
    registrationResponse
  );

  memoryStorage["user@example.com"].registrationResult = registrationResult;;

  console.log({ registrationResult });

  res.send(registrationResult);
});

app.get("/u2f/request/2", (req, res) => {
  const authenticateRequest = u2f.request(
    APP_ID,
    memoryStorage["user@example.com"].registrationResult.keyHandle
  );

  console.log({ url: req.url, memoryStorage, authenticateRequest });

  memoryStorage["user@example.com"].authenticateRequest = authenticateRequest;

  res.send(authenticateRequest);
});

app.post("/u2f/checkSignature/3", ({ body: authenticateResponse, url }, res) => {
  console.log({ url, authenticateResponse });

  const { authenticateRequest, registrationResult: { publicKey } } = memoryStorage["user@example.com"];

  const authenticateResult = u2f.checkSignature(authenticateRequest, authenticateResponse, publicKey);

  console.log({ authenticateResult });

  res.send(authenticateResult);
});

module.exports = app;
