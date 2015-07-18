import max = require("../common/max");
export = mode;

function mode(data: number[]) {
	var distribution = data.reduce((prev, curr) => {
		let hasValue = !!prev[curr];
		
		if (hasValue) prev[curr]++;
		else prev[curr] = 1;
		
		return prev;
	}, []);
	
	var maximum = max(distribution);
	
	var modes: number[] = [];
	distribution.forEach((value, index) => {
		if (value === maximum) modes.push(index);
	});
	
	return modes;			
}