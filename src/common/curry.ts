export = curry;

function curry(fn: Function, ...fnArgs: any[]): (...args: any[]) => any {
	var args = Array.prototype.slice.call(arguments, 1);
	
	return function() {
		return fn.apply(this, args.concat(Array.prototype.slice.call(arguments, 0)));
	};
}