import Analysis = require("analysis");
import Common = Analysis.Common;
import toArray = require("./toArray");
import curry = require("./curry");
import isNumber = require("./isNumber");
import max = require("./max");
import min = require("./min");
import range = require("./range");
import round = require("./round");
import sum = require("./sum");
import validateArray = require("./validateArray");
import isEven = require("./isEven");
import sortAsc = require("./sortAsc");
import sortDesc = require("./sortDesc");
import isWhole = require("./isWhole");
export = api;

var api: Common = {
	toArray: toArray,
	min: min,
	max: max,
	range: range,
	round: round,
	validateArray: validateArray,
	sum: sum,
	isNumber: isNumber,
	curry: curry,
	isEven: isEven,
	sortAsc: sortAsc,
	sortDesc: sortDesc,
	isWhole: isWhole
};