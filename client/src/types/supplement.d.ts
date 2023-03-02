export interface Supplement {
	id: string;
	name: string;
	description: string;
	hash: string;
	nutrients: Nutrient[];
}
