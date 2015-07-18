declare module "analysis" {
	export = Analysis;
}

declare module Analysis {
	export var common: Common;
	export var descriptive: Descriptive;

	export interface Common {
		round(value: number, decimalPlaces?: number): number;
		objectToArray(dataset: {}): number[];
		max(data: number[]|{}): number;
		min(data: number[]|{}): number;
		range(data: number[]|{}): RangeResult;
	}

	export interface Descriptive {
		mean(data: number[]|{}): number;
		median(data: number[]|{}): number;
		mode(data: number[]|{}): number[];
	}

	export interface RangeResult {
		min: number;
		max: number;
	}
}

