export = convert;

function convert(data: number[]|{}) {
	if (data instanceof Array) return data.slice();
	
	var newData = Object.keys(data)
		.reduce((prev, curr) => {
			var value = data[curr];
			prev.push(value);
			return prev;
		}, []);
		
	return newData;
}