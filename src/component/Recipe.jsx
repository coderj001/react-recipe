import React, { useContext } from "react";
import Ingredient from "./ingredientList";
import { RecipeContext } from "../App";

export default function Recipe(props) {
  const { handleRecipeDelete } = useContext(RecipeContext);
  const { id, name, cookTime, servings, instructions, ingredients } = props;
  return (
    <div className="recipe">
      <div className="recipe__header">
        <h1 className="recipe__title">{name}</h1>
        <div>
          <button className="btn btn--primary mr-1">Edit</button>
          <button
            onClick={() => {
              handleRecipeDelete(id);
            }}
            className="btn btn--danger mr-1"
          >
            Delete
          </button>
        </div>
        <div>
          <span className="recipe__label">Cook Time:</span>
          <span className="recipe__value">{cookTime} hour(s)</span>
        </div>
        <div>
          <span className="recipe__label">Servings:</span>
          <span className="recipe__value">{servings}</span>
        </div>
        <div>
          <span>Instruction:</span>
          <div>
            <ol>
              {instructions.map((instruction) => {
                return <li key={instruction}>{instruction}</li>;
              })}
            </ol>
          </div>
          <div>
            <span>Ingredients: </span>
            <div>
              {" "}
              <Ingredient ingredients={ingredients} />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
