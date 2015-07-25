import Analysis = require("analysis");
import chiSquare = require("./chiSquare");
import poisson = require("./poisson");
export = api;

var api: Analysis.Distribution = {
	chiSquare: chiSquare,
	poisson: poisson
};
