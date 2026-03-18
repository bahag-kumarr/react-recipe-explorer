export interface MealDetails {
  idMeal: number;
  strMeal: string;
  strCategory: string;
  strArea: string;
}

export interface ApiResponse {
  meals: MealDetails[];
}