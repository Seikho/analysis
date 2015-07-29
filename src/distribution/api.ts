import Analysis = require("analysis");
import chiSquare = require("./chiSquare");
import poisson = require("./poisson");
import binomialProbability = require("./binomialProbability")
export = api;

var api: Analysis.Distribution = {
	chiSquare: chiSquare,
	poisson: poisson,
	binomialProbability: binomialProbability
};
