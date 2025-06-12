import { Button } from "react-bootstrap";
import { useParams } from "react-router";
import type RecipeCardsI from "../@Types/recipe";
import { useEffect } from "react";

export default function Recipe({ allRecipes }: { allRecipes: RecipeCardsI[] }) {

    // reset du scroll
    useEffect(() => {
        scrollTo(0, 0)
    })

    // Récupération du params.slug
    const params = useParams()
    const slug = params.slug
 
    // identification de la recette liée au slug
    const recipe = allRecipes.find((recipe) => recipe.slug === slug);

    return (
        <div className="Recipe">
            <img className="recipe-img-full" src={recipe?.thumbnail} alt={recipe?.description} />
            <h1>{recipe?.title}</h1>
            <section id="ingredients">
                <ul>
                    {recipe?.ingredients.map((recipe) => (

                        <li key={recipe.id}><Button variant="primary" >{recipe.quantity} {" "} {recipe.unit}</Button>{recipe.name}</li>
                    ))}
                </ul>
            </section>
            <section id="recipe-steps">
                <ul>
                    {recipe?.instructions.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                    ))}
                </ul>
            </section>
        </div>
    )
}