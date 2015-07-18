import table = require("./table");
import range = require("../common/range");
import objectToArray = require("../common/objectToArray");
export = histogram;

function histogram(data: number[]|{}, binCount?: number, binSize?: number) {
	if (binSize) binCount = 
	binCount = binCount || 10;
}

