import { Button, Card } from 'react-bootstrap';

export interface RecipeCardsI {
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

export default function RecipeCards({recipe }: {recipe : RecipeCardsI}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={recipe.thumbnail} />
      <Card.Body>
        <Card.Title>{recipe.title}</Card.Title>
        <Card.Text>
          {recipe.description}
        </Card.Text>
        <Button variant="primary">Voir la recette</Button>
      </Card.Body>
    </Card>
  )
}