const handler = require("serverless-express/handler");
const express = require("serverless-express/express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.get("/api/ping", (req, res) => {
  res.send("OK");
});

module.exports.handler = handler(app);
