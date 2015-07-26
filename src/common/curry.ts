export = curry;

function curry(fn: Function, ...fnArgs: any[]): (...args: any[]) => any {
	while(fnArgs.length < fn.length) {
		fnArgs[fnArgs.length] = NaN;
	}
	
	return function() {
		let innerArgs = Array.prototype.slice.call(arguments, 0);
		
		var mergedArgs = mergeArgs(fnArgs, innerArgs);
		if (mergedArgs.some(isGap))
			return curry.apply(curry, [fn].concat(mergedArgs));
			
		return fn.apply(this, mergedArgs);
	};
}

function getFirstEmpty(args: any[]) {
	for (let x = 0; x < args.length; x++) {
		if (isGap(args[x])) return x;
	}
	
	return null;
}

function mergeArgs(left: any[], right: any[]) {
	var merged = left.slice();
	right.forEach(value => {
		let next = getFirstEmpty(merged);
		if (next == null) return;
		merged[next] = value;
	});
	
	return merged;
}

function isGap(value: any) {
	return isNaN(value) && value.toString() === "NaN" && typeof value === "number";
}