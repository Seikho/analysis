import toArray = require("../common/toArray");
import sum = require("../common/sum");
import table = require("./table");
import Analysis = require("analysis");
import round = require("../common/round");
export = relative;

function relative(data: number[]|{}): Analysis.Dataset {
	var dataset = table(toArray(data));
	var total = sum(dataset);
	var percent = val => dataset[val] / total;

	var reducer = (obj, prop) => {
		obj[prop] = percent(prop);
		return obj;
	}

	return Object
		.keys(dataset)
		.reduce(reducer, {});
}