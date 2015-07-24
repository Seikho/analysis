function chiSquare(observedFrequency, expectedFrequency) {
    var sq = function (val) { return Math.pow(val, 2); };
    var top = Math.pow(observedFrequency - expectedFrequency, 2);
    return top / expectedFrequency;
}
module.exports = chiSquare;
//# sourceMappingURL=chiSquare.js.map