import { Button, Card } from 'react-bootstrap';


export default function RecipeCards () {
    return (
<Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../../../public/images/fondant.jpeg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Voir la recette</Button>
            </Card.Body>
          </Card>
    )
}