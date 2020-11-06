import React from "react";
import Ingredient from "./ingredient";

export default function IngredientList({ ingredients }) {
  const ingredientElements = ingredients.map((ingredient) => {
    return (
      <ul>
        <li>
          <Ingredient key={ingredient.id} {...ingredient} />
        </li>
      </ul>
    );
  });
  return <div>{ingredientElements}</div>;
}
