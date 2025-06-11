
import { NavLink } from "react-router";
import type { RecipeCardsProps } from "../@Types/recipe";

export default function NavLinks({ recipe }: RecipeCardsProps) {
    return (
        <NavLink
            to={`/${recipe.slug}`}
            className="nav-link"
        >
            {recipe.title}
        </NavLink>
    );
}
