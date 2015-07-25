export = curry;

function add(left, mid, right) {
	return left + mid + right;
}

console.log(curry(add, NaN, NaN, 3)(1)(2));

function curry(fn: Function, ...fnArgs: any[]): (...args: any[]) => any {
	while(fnArgs.length < fn.length) {
		fnArgs[fnArgs.length] = NaN;
	}
	
	return function() {
		let innerArgs = Array.prototype.slice.call(arguments, 0);
		
		fnArgs = mergeArgs(fnArgs, innerArgs);
		console.log(fnArgs);
		if (fnArgs.some(isGap))
			return curry.apply(curry, [fn].concat(fnArgs));
			
		return fn.apply(this, fnArgs);
	};
}

function getFirstEmpty(args: any[]) {
	for (let x = 0; x < args.length; x++) {
		if (isGap(args[x])) return x;
	}
	
	return null;
}

function mergeArgs(left: any[], right: any[]) {

	right.forEach(value => {
		let next = getFirstEmpty(left);
		if (next == null) return;
		left[next] = value;
	});
	
	return left;
}

function isGap(value: any) {
	return isNaN(value) && value.toString() === "NaN";
}