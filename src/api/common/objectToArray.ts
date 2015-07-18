export = convert;

function convert(data: {}) {
	var newData = Object.keys(data)
		.reduce((prev, curr) => {
			var value = data[curr];
			prev.push(value);
			return prev;
		}, []);
		
	return newData;
}