import Analysis = require("analysis");
import Common = Analysis.Common;

import curry = require("./curry");
import isNumber = require("./isNumber");
import max = require("./max");
import min = require("./min");
import toArray = require("./toArray");
import range = require("./range");
import round = require("./round");
import sum = require("./sum");
import validateArray = require("./validateArray");
import isEven = require("./isEven");
export = api;

var api: Common = {
	min: min,
	max: max,
	range: range,
	round: round,
	validateArray: validateArray,
	toArray: toArray,
	sum: sum,
	isNumber: isNumber,
	curry: curry,
	isEven: isEven
};