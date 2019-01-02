import coefficient = require('./coefficient')
export = probability
/**
 * Chance of exactly 'k' successes in 'n' events, given a probability a success
 */
function probability(
  chanceOfSuccess: number,
  events: number,
  successes: number
): number {
  var odds = coefficient(events, successes)
  var success = Math.pow(chanceOfSuccess, successes)
  var fail = Math.pow(1 - chanceOfSuccess, events - successes)

  return odds * success * fail
}
