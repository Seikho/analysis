import Analysis = require("../../index.d.ts");
import histogram = require("./histogram");
import relative = require("./relative");
import table = require("./table");
export = api;

var api: Analysis.Frequency = {
	table: table,
	histogram: histogram,
	relative: relative
};