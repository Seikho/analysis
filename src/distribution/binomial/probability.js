var coefficient = require("./coefficient");
/**
 * Chance of exactly 'k' successes in 'n' events, given a probability a success
 */
function probability(chanceOfSuccess, events, successes) {
    var odds = coefficient(events, successes);
    var success = Math.pow(chanceOfSuccess, successes);
    var fail = Math.pow(1 - chanceOfSuccess, events - successes);
    return odds * success * fail;
}
module.exports = probability;
//# sourceMappingURL=probability.js.map