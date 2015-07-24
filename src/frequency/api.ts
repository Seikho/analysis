import Analysis = require("analysis");
import histogram = require("./histogram");
import table = require("./table");
export = api;

var api: Analysis.Frequency = {
	table: table,
	histogram: histogram
};