var variance = require("./variance");
var objectToArray = require("../common/objectToArray");
function stdDev(data) {
    var dataset = objectToArray(data);
    var populationVariance = variance(dataset);
    return Math.sqrt(populationVariance);
}
module.exports = stdDev;
//# sourceMappingURL=standardDeviation.js.map