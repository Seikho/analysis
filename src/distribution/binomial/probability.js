var coefficient = require("./coefficient");
function probability(chanceOfSuccess, events, expectedSuccesses) {
    var odds = coefficient(events, expectedSuccesses);
    var success = Math.pow(chanceOfSuccess, expectedSuccesses);
    var fail = Math.pow(1 - chanceOfSuccess, events - expectedSuccesses);
    return odds * success * fail;
}
module.exports = probability;
//# sourceMappingURL=probability.js.map