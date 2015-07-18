declare module "analysis" {
	export = Analysis;
}

declare module Analysis {
	export var common: Common;
	export var descriptive: Descriptive;
}

interface Common {
	round(value: number, decimalPlaces?: number): number;
	objectToArray(dataset: {}): number[];
	max(dataset: number[]|{}): number[];
}

interface Descriptive {
	mean(data: number[]|{}): number;
	median(data: number[]|{}): number;
	mode(data: number[]|{}): number[];
}