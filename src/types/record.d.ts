import { Nutrient } from "./nutrients";

export interface NutrientRecord {
	id: string;
	value: number;
	nutrient: Nutrient;
	sources: Supplement[];
}