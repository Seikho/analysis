var factorial = require("../common/factorial");
var e = 2.71828;
function poisson(x, avgSuccessRate) {
    var first = Math.pow(e, -avgSuccessRate);
    var second = Math.pow(avgSuccessRate, x);
    var third = factorial(x);
    return first * second / third;
}
module.exports = poisson;
//# sourceMappingURL=poisson.js.map