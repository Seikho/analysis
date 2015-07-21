var min = require("./min");
var max = require("./max");
function range(data) {
    var minimum = min(data);
    var maximum = max(data);
    var difference = maximum - minimum;
    var result = {
        minimum: minimum,
        maximum: maximum,
        difference: difference
    };
    return result;
}
module.exports = range;
//# sourceMappingURL=range.js.map