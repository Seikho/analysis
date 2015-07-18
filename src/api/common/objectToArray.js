function convert(data) {
    if (data instanceof Array)
        return data.slice();
    var newData = Object.keys(data)
        .reduce(function (prev, curr) {
        var value = data[curr];
        prev.push(value);
        return prev;
    }, []);
    return newData;
}
module.exports = convert;
//# sourceMappingURL=objectToArray.js.map