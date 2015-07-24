import common = require("./api");
export = sort;

function sort(data: number[]|{}) {
	var dataset = common.toArray(data);
	
	return dataset.sort((l, r) => l - r);
}