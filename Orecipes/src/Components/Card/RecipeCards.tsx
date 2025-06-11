import { Button, Card } from 'react-bootstrap';
import type RecipeCardsI from "../@Types/recipe";

export default function Recipe({ allRecipes }: { allRecipes: RecipeCardsI[] }) {
 scrollTo(0,0)
  return (
    <div>
      <div id='title'>
        <h1>Les recettes oRecipes</h1>
        <h2>Voici nos {allRecipes.length} recettes</h2>
      </div>
      <div id="recipes">
        {allRecipes.map((recipe) => (
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={recipe.thumbnail} />
            <Card.Body>
              <Card.Title>{recipe.title}</Card.Title>
              <Card.Text>
                {recipe.description}
              </Card.Text>
              <Card.Text className='diff'>
                <p className='diff'>Difficulté : {recipe.description}</p>
              </Card.Text>
              <Button variant="primary">Voir la recette</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  )
}