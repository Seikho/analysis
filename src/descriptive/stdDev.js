var variance = require("./variance");
function stdDev(data) {
    var populationVariance = variance(data);
    return Math.sqrt(populationVariance);
}
module.exports = stdDev;
//# sourceMappingURL=stdDev.js.map