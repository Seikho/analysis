import toArray = require("../common/toArray");
import isEven = require("../common/isEven");
import sortAsc = require("../common/sortAsc");
import errors = require("../errors");
export = firstQuartile;

function firstQuartile(data: number[]|{}): number {
	var dataset = sortAsc(toArray(data));
	if (dataset.length < 4) throw new Error(errors.InsufficientValues);
	
	var upperIndex = Math.floor(dataset.length / 2) - 1;
	var middleIndex = upperIndex / 2;
	
	if (isEven(dataset.length)) return dataset[middleIndex];

	var down = Math.floor(middleIndex);
	var up = Math.ceil(middleIndex);

	return (dataset[down] + dataset[up]) / 2;
}