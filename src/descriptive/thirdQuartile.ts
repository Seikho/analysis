import toArray = require("../common/toArray");
import isEven = require("../common/isEven");
import isWhole = require("../common/isWhole");
import sortAsc = require("../common/sortAsc");
import errors = require("../errors");
export = thirdQuartile;

function thirdQuartile(data: number[]|{}): number {
	var dataset = sortAsc(toArray(data));
	if (dataset.length < 4) return null;

	var offset = dataset.length * 0.75;
	var offsetFloored = Math.floor(offset);

	if (!isWhole(offset)) return dataset[offsetFloored];	
	
	var otherOffset = offsetFloored - 1;

	return (dataset[offsetFloored] + dataset[otherOffset]) / 2;
}