import Analysis = require("analysis");
import Common = Analysis.Common;

import curry = require("./curry");
import isNumber = require("./isNumber");
import max = require("./max");
import min = require("./min");
import objectToArray = require("./objectToArray");
import range = require("./range");
import round = require("./round");
import sum = require("./sum");
import validateArray = require("./validateArray");
export = api;

var api: Common = {
	min: min,
	max: max,
	range: range,
	round: round,
	validateArray: validateArray,
	objectToArray: objectToArray,
	sum: sum,
	isNumber: isNumber,
	curry: curry
};