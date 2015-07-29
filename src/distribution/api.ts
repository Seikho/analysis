import Analysis = require("analysis");
import chiSquare = require("./chiSquare");
import poisson = require("./poisson");
import binomialCoefficient = require("./binomialCoefficient");
import binomial = require("./binomial")
export = api;

var api: Analysis.Distribution = {
	chiSquare: chiSquare,
	poisson: poisson,
	binomialCoefficient: binomialCoefficient,
	binomial: binomial
};
