import React from "react";
import Ingredient from "./ingredient";

export default function IngredientList({ ingredients }) {
  const ingredientElements = ingredients.map((ingredient) => {
    return (
      <ul className="ingredient-grid">
        <li key={ingredient.id}>
          <Ingredient {...ingredient} />
        </li>
      </ul>
    );
  });
  return <div>{ingredientElements}</div>;
}
