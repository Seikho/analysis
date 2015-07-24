import curry = require("../common/curry");
export = chiSquare;

function chiSquare(observedFrequency: number, expectedFrequency: number): number {
	var sq = val => Math.pow(val, 2);
	
	var top = Math.pow(observedFrequency - expectedFrequency, 2);
	return top / expectedFrequency;
}