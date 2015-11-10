import Analysis = require("../../index.d.ts");
import chiSquare = require("./chiSquare");
import poisson = require("./poisson");
import binomial = require("./binomial/index");
export = api;

var api: Analysis.Distribution = {
	chiSquare: chiSquare,
	poisson: poisson,
	binomial: binomial
};
