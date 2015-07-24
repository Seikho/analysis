import common = require("../common/api");
export = median;

function median(data: number[]|{}) {
	var dataset: number[] = common.toArray(data);

	var sortedDataset = dataset.sort((left, right) => left - right);
	var middleIndex = sortedDataset.length / 2;

	if (!common.isEven(dataset.length)) {
		let index = Math.floor(middleIndex);
		return sortedDataset[index];
	}
	
	var lowerIndex = middleIndex-1;
	return (sortedDataset[lowerIndex] + sortedDataset[middleIndex]) / 2;
}