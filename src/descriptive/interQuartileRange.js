var firstQuartile = require("./firstQuartile");
var thirdQuartile = require("./thirdQuartile");
function range(data) {
    var first = firstQuartile(data);
    var third = thirdQuartile(data);
    return third - first;
}
module.exports = range;
//# sourceMappingURL=interQuartileRange.js.map