function ConvertHandler() {
  this.getNum = function(input) {
    var result;
    let regex = /[^a-z]+/i;
    result = input.match(regex);
    if (result == null || result == "") {
      return 1;
    }
    if (result[0].replace(/[^\/]/g, "").length > 1) {
      return "invalid";
    }
    result = eval(result[0]);
    if (isNaN(result)) {
      return "invalid";
    }
    return result;
  };

  this.getUnit = function(input) {
    var result;
    let regex = /[a-z]+/i;
    result = input.match(regex);
    result = result[0].toLowerCase();
    if (
      result == "gal" ||
      result == "l" ||
      result == "lbs" ||
      result == "kg" ||
      result == "mi" ||
      result == "km"
    ) {
      return result;
    }
    return "invalid";
  };

  this.getReturnUnit = function(initUnit) {
    var result;
    if (initUnit == "gal") {
      result = "l";
    } else if (initUnit == "l") {
      result = "gal";
    } else if (initUnit == "lbs") {
      result = "kg";
    } else if (initUnit == "kg") {
      result = "lbs";
    } else if (initUnit == "mi") {
      result = "km";
    } else if (initUnit == "km") {
      result = "mi";
    } else {
      return "invalid input";
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    if (unit == "gal") {
      result = "gallons";
    } else if (unit == "l") {
      result = "liters";
    } else if (unit == "lbs") {
      result = "pounds";
    } else if (unit == "kg") {
      result = "kilograms";
    } else if (unit == "mi") {
      result = "miles";
    } else if (unit == "km") {
      result = "kilometers";
    }
    return result;
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    if (initUnit == "gal") {
      result = initNum * galToL;
    } else if (initUnit == "l") {
      result = initNum / galToL;
    } else if (initUnit == "lbs") {
      result = initNum * lbsToKg;
    } else if (initUnit == "kg") {
      result = initNum / lbsToKg;
    } else if (initUnit == "mi") {
      result = initNum * miToKm;
    } else if (initUnit == "km") {
      result = initNum / miToKm;
    } else {
      return "invalid input";
    }
    return result;
  };
  //console.log(this.convert(32, 'ggg'));

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    //The below statement is used to ensure returnNum.toFixed() doesn't error out.
    if (typeof returnNum != "number") {
      returnNum = 0;
    }
    result =
      initNum +
      " " +
      initUnit +
      " converts to " +
      returnNum.toFixed(5) +
      " " +
      returnUnit;
    return result;
  };
}

module.exports = ConvertHandler;
