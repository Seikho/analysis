export = mean;

function mean(data: number[]) {
	var sampleSize = data.length;
	var total = data.reduce((previous, current) => {
		previous += current;
		return previous;
	}, 0);
	
	return total / sampleSize;
}