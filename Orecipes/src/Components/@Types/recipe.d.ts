export default interface RecipeCardsI {
  id: number;
  title: string;
  slug: string;
  thumbnail: string;
  author: string;
  difficulty: string;
  description: string;
  ingredients: [
    {
      id: number;
      quantity: number;
      unit: string;
      name: string;
    }];
  instructions: string;
}

export interface RecipeCardsProps {
  recipe: RecipeCardsI;
}