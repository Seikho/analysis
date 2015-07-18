var min = require("./min");
var max = require("./max");
function range(data) {
    var minimum = min(data);
    var maximum = max(data);
    var result = {
        min: minimum,
        max: maximum
    };
    return result;
}
module.exports = range;
//# sourceMappingURL=range.js.map