export interface Recipie {
  recipieId?: number;
  name?: string;
  timeToCook?: {
    hours?: number;
    minutes?: number;
    seconds?: number;
  };
  method?: void;
  imageUrl?: string;
  isVegetarian?: boolean;
  isVegan?: boolean;
  isFavorite?: boolean;
  ingredients?: [
    {
      ingredientId: number;
      name: string;
      quantity: number;
      unit: string;
    }
  ];
}
