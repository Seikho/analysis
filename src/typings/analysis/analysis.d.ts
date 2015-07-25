declare module "analysis" {
	export var common: Common;
	export var descriptive: Descriptive;
	export var frequency: Frequency;

	export interface Common {
		round(value: number, decimalPlaces?: number): number;
		toArray(dataset: {}): number[];
		max(data: number[]|{}): number;
		min(data: number[]|{}): number;
		range(data: number[]|{}): RangeResult;
		validateArray(data: number[]): number[];
		sum(data: number[]|{}): number;
		round(value: number, decimalPlaces?: number): number;
		isNumber(value: any): boolean;
		curry(fn: Function, ...fnArgs: any[]): (...args: any[]) => any;
		isEven(value: number): boolean;
		sortAsc(data: number[]|{}): number[];
		sortDesc(data: number[]|{}): number[];
		isWhole(value: number): boolean;
	}

	export interface Descriptive {
		mean(data: number[]|{}): number;
		median(data: number[]|{}): number;
		mode(data: number[]|{}): number[];
		stdDev(data: number[]|{}): number;
		variance(data: number|{}): number;
		zScore(data: number[]|{}, value: number): number;
		firstQuartile(data: number[]|{}): number;
		thirdQuartile(data: number[]|{}): number;
		interQuartileRange(data: number[]|{}): number;
	}

	export interface RangeResult {
		minimum: number;
		maximum: number;
		difference: number;
	}

	export interface Frequency {
		table(data: number[]|{}): Dataset;
		histogram(data: number[]|{}, binSettings?: BinSettings): Dataset;
		relative(data: number[]|{}): Dataset;
	}

	export interface BinSettings {
		binCount?: number;
		binSize?: number;
		minimum?: number;
		maximum?: number;
		difference?: number;
	}
	
	export interface Dataset {
		[index: string]: number;
	}
}