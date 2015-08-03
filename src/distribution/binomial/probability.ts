import coefficient = require("./coefficient");
export = probability;

function probability(chanceOfSuccess: number, events: number, expectedSuccesses: number): number {
	var odds = coefficient(events, expectedSuccesses);
	var success = Math.pow(chanceOfSuccess, expectedSuccesses);
	var fail = Math.pow(1 - chanceOfSuccess, events - expectedSuccesses);
	
	return odds * success * fail;
}