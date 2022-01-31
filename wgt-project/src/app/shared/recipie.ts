// export interface Recipie {
//   id: number;
//   title: string;
//   src: string;
//   description: string;
// }

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
  ingredients?: string[];
}
