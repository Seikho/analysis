import common = require("./common/api");
import descriptive = require("./descriptive/api");
import frequency = require("./frequency/api");
import distribution = require("./distribution/api");
export = Analysis;

var Analysis = {
	common: common,
	descriptive: descriptive,
	frequency: frequency,
	distribution: distribution
}

if (window) window.Analysis = Analysis;