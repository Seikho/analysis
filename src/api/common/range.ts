import min = require("./min");
import max = require("./max");
export = range;

function range(data: number[]|{}): Analysis.RangeResult {
	var minimum = min(data);
	var maximum = max(data);
	
	var result = {
		min: minimum,
		max: maximum
	};
	
	return result;
}