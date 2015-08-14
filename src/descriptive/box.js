var firstQuartile = require("./firstQuartile");
var thirdQuartile = require("./thirdQuartile");
var mean = require("./mean");
var median = require("./median");
var mode = require("./mode");
var range = require("../common/range");
var toArray = require("../common/toArray");
function box(data) {
    var dataset = toArray(data);
    return {
        mean: mean(dataset),
        mode: mode(dataset),
        median: median(dataset),
        range: range(dataset),
        lowerQuartile: firstQuartile(dataset),
        upperQuartile: thirdQuartile(dataset)
    };
}
module.exports = box;
//# sourceMappingURL=box.js.map