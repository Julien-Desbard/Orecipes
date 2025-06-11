import { Button, Card } from 'react-bootstrap';
import type { RecipeCardsProps } from '../@Types/recipe';



export default function RecipeCards({ recipe }: RecipeCardsProps) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={recipe.thumbnail} />
      <Card.Body>
        <Card.Title>{recipe.title}</Card.Title>
        <Card.Text>
          {recipe.description}
        </Card.Text>
        <Card.Text className='diff'>
          Difficulté : {recipe.description}
        </Card.Text>
        <Button variant="primary">Voir la recette</Button>
      </Card.Body>
    </Card>
  )
}