function mean(data) {
    var sampleSize = data.length;
    var total = data.reduce(function (previous, current) {
        previous += current;
        return previous;
    }, 0);
    return total / sampleSize;
}
module.exports = mean;
//# sourceMappingURL=mean.js.map