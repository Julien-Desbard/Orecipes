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
import { Route, Routes, useParams } from 'react-router';
import Recipe from './Components/Recipe/Recipe';

function App() {

  // state pour gérer les recettes
  const [allRecipes, setAllRecipes] = useState<RecipeCardsI[]>([])

  // loader
  const [isLoading, setIsLoading] = useState(false)

  // call de l'API
  useEffect(() => {
    const getAllRecipe = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get('https://orecipesapi.onrender.com/api/recipes')
        // srockage des recettes dans le state
        setAllRecipes(response.data)
        setIsLoading(false)
      } catch (e) {
        if (e instanceof AxiosError) {
          console.log(e.message);
        }
      }
    }
    getAllRecipe()
  }, []);

  console.log("voici les recettes", allRecipes)
  const params = useParams()
  return (
    <>
      <div id="menu">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                {allRecipes.map((recipe) => (
                  <NavLinks key={recipe.id} recipe={recipe} />
                ))}
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

        {isLoading && <Loader />}
        {/* route pour toutes les recettes */}
        <Routes>
          <Route path="/home" element={<RecipeCards allRecipes={allRecipes} />} />
        </Routes>
        {/* route pour les recettes individuelles */}
        <Routes>
          <Route path="/:slug" element={<Recipe allRecipes={allRecipes} />} />
        </Routes>
      </div>

    </>
  )
}

export default App
