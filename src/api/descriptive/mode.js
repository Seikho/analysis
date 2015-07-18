function mode(data) {
    var distribution = data.reduce(function (prev, curr) {
        var hasValue = !!prev[curr];
        if (hasValue)
            prev[curr]++;
        else
            prev[curr] = 1;
        return prev;
    }, []);
}
module.exports = mode;
//# sourceMappingURL=mode.js.map