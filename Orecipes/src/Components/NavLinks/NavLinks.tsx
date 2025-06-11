import { Nav } from "react-bootstrap";
import type { RecipeCardsProps } from "../@Types/recipe";

export default function NavLinks ({ recipe }: RecipeCardsProps) {
    return (
        <Nav.Link href="#link">{recipe.title}</Nav.Link>
    )
}