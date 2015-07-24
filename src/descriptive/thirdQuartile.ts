import toArray = require("../common/toArray");
import isEven = require("../common/isEven");
import sortDesc = require("../common/sortDesc");
import errors = require("../errors");
export = thirdQuartile;

function thirdQuartile(data: number[]|{}): number {
	var dataset = sortDesc(toArray(data));
	if (dataset.length < 4) throw new Error(errors.InsufficientValues);

	var offset = dataset.length * 0.75;
	var offsetFloored = Math.floor(offset);

	if (!isEven(offset)) return dataset[offsetFloored];

	var down = Math.floor(middleIndex);
	var up = Math.ceil(middleIndex);

	return (dataset[down] + dataset[up]) / 2;
}