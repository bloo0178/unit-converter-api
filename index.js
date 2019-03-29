const serverless = require("serverless-http");
const bodyParser = require("body-parser");
const express = require("express");
const ConvertHandler = require("./controllers/convertHandler");
const app = express();

const convert = new ConvertHandler();

app.use(bodyParser.json({ strict: false }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", function(req, res) {
  var input = req.query.input;
  var initNum = convert.getNum(input);
  var initUnit = convert.getUnit(input);
  var returnNum = convert.convert(initNum, initUnit);
  var returnUnit = convert.getReturnUnit(initUnit);
  var toString = convert.getString(initNum, initUnit, returnNum, returnUnit);

  if (initNum == "invalid" && initUnit == "invalid") {
    res.json("invalid number and unit");
  } else if (initNum == "invalid" && initUnit != "invalid") {
    res.json("invalid number");
  } else if (initNum != "invalid" && initUnit == "invalid") {
    res.json("invalid unit");
  } else {
    res.json({
      initNum: initNum,
      initUnit: initUnit,
      returnNum: returnNum,
      returnUnit: returnUnit,
      string: toString
    });
  }
});

module.exports.handler = serverless(app);
