import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Container, Nav, Navbar} from 'react-bootstrap';
import RecipeCards from './Components/Card/RecipeCards';
import Recipe from './Components/Recipe/Recipe';

function App() {


  return (
    <>
      <div id="menu">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Accueil</Nav.Link>
                <Nav.Link href="#link">Cookies au beurre de cachuete</Nav.Link>
                <Nav.Link href="#link">Cookies au beurre de cachuete</Nav.Link>
                <Nav.Link href="#link">Cookies au beurre de cachuete</Nav.Link>
                <Nav.Link href="#link">Cookies au beurre de cachuete</Nav.Link>
                <Nav.Link href="#link">Cookies au beurre de cachuete</Nav.Link>
                <Nav.Link href="#link">Cookies au beurre de cachuete</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div id="container">
        <div id="header">
          <header>
            <form action="">
              <img src="../front_docs/logo.png" alt="logo Orecipes" className='logo' />
              <input type="text" placeholder='Adresse email' />
              <input type="text" placeholder='Mot de passe' />
              <Button variant="primary">OK</Button>
            </form>
          </header>
        </div>
        <div id='title'>
          <h1>Les recettes oRecipes</h1>
          <h2>Voici nos 6 recettes</h2>
        </div>
        <div id="recipes">
          {/* <RecipeCards/>
          <RecipeCards/>
          <RecipeCards/>
          <RecipeCards/>
          <RecipeCards/>
          <RecipeCards/>
          <RecipeCards/>
          <RecipeCards/>
          <RecipeCards/> */}
          {/* <Recipe/> */}
        </div>
      </div>

    </>
  )
}

export default App
