export interface Recipe {
    id: number;
    title: string;
    ingredients: string[];
    instructions: string;
    image: string;
}

export interface UserPreferences {
    dietaryRestrictions: string[];
    preferredCuisines: string[];
    spiceLevel: number; // 1 to 5 scale
}