import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import RecipeCards from './Components/Card/RecipeCards';
import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import NavLinks from './Components/NavLinks/NavLinks';
import type RecipeCardsI from './Components/@Types/recipe';
import Loader from './Components/loader/Loader';
import { NavLink, Route, Routes, useParams } from 'react-router';
import Recipe from './Components/Recipe/Recipe';
import Form from './Components/Formulaire/Form';
import Welcome from './Components/Welcome';

function App() {

  // state pour gérer les recettes
  const [allRecipes, setAllRecipes] = useState<RecipeCardsI[]>([])

  // state pour le loader
  const [isLoading, setIsLoading] = useState(false)

  // state pour les erreurs
  const[fetchError, setFetchError] = useState<string>("")

  // State pour le user
  const [userMessage, setUserMessage] = useState<string>("null")

  // focntion de call de l'API
  const getAllRecipe = async () => {
    // Loader
    setIsLoading(true)
    // requête API
    try {
      const response = await axios.get('https://orecipesapi.onrender.com/api/recipes')
      // stockage des recettes dans le state
      setAllRecipes(response.data)
      // Maj du loader
      setIsLoading(false)
      
      // gestiond des erreurs
    } catch (e) {
      if (e instanceof AxiosError) {
        console.log(e.message);
        setFetchError(e.message)
      }
    }
  }

  // call de l'API via useffect
  useEffect(() => {
    getAllRecipe()
  }, []);

  return (
    <>
      <div id="menu">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink to="/" className="nav-link">Home</NavLink>
                {allRecipes.map((recipe) => (
                  <NavLinks key={recipe.id} recipe={recipe} />
                ))}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      </div>
      <div id="container">
        {userMessage === "null" ? 
          <Form setUserMessage={setUserMessage} setFetchError={setFetchError}/>:
          <Welcome userMessage={userMessage}/>
        }
          {isLoading? (<Loader />) :
        // route pour toutes les recettes }
        (<Routes>
          <Route path="/" element={<RecipeCards allRecipes={allRecipes} />} />

        {/* route pour les recettes individuelles */}
          <Route path="/:slug" element={<Recipe allRecipes={allRecipes} />} />
        </Routes>)}
      </div>

    </>
  )
}

export default App
