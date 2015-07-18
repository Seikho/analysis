import objectToArray = require("../common/objectToArray");
export = median;

function median(data: number[]|{}) {
	var dataset: number[];

	if (data instanceof Array) dataset = data.slice();
	else dataset = objectToArray(data);

	var sortedDataset = dataset.sort((left, right) => left - right);

	var isEvenAmount = (sortedDataset.length % 2) === 0;
	var middleIndex = sortedDataset.length / 2;

	if (!isEvenAmount) {
		let index = Math.floor(middleIndex);
		return sortedDataset[index];
	}
	
	var lowerIndex = middleIndex-1;
	return (sortedDataset[lowerIndex] + sortedDataset[middleIndex]) / 2;
}