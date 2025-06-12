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
  instructions: string[];
}

// Props pour une seule recette
export interface RecipeCardsProps {
  recipe: RecipeCardsI;
}

// props pour plusieurs recettes
export default interface RecipeProps {
  allRecipes: RecipeCardsI[];
}

export default interface userMessageI {
    userMessage : string
}