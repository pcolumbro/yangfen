import { NutrientRecord } from "./record";

export interface NutrientReport {
	id: string;
	userId: string;
	name: string;
	description: string;
	report: NutrientRecord[];
}