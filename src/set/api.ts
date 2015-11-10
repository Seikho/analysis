import Analysis = require("../../index.d.ts");
import distinct = require("./distinct");
import intersect = require("./intersect");
import union = require("./union");
export = set;

var set: Analysis.Set = {
	distinct: distinct,
	intersect: intersect,
	union: union
}