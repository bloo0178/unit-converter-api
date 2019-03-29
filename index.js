const serverless = require("serverless-http");
const express = require("express");
const cors = require("cors");
const convertHandler = require("./controllers/convertHandler");
//const app = express();
const app = express().use("*", cors());

const convertHandler = new convertHandler();

app.route("/api/convert").get(function(req, res) {
  var input = req.query.input;
  var initNum = convertHandler.getNum(input);
  var initUnit = convertHandler.getUnit(input);
  var returnNum = convertHandler.convert(initNum, initUnit);
  var returnUnit = convertHandler.getReturnUnit(initUnit);
  var toString = convertHandler.getString(
    initNum,
    initUnit,
    returnNum,
    returnUnit
  );

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
