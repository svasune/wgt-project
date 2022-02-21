export class Food {
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
  ingredients?: [
    {
      ingredientId: number;
      name: string;
      quantity: number;
      unit: string;
    }
  ];
}
