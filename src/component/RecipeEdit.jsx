import React, { useContext } from "react";
import IngredientEdit from "./ingredientEdit";
import { RecipeContext } from "../App";

export default function RecipeEdit({ recipe }) {
  const { handleRecipeChange } = useContext(RecipeContext);

  function handleChange(changes) {
    handleRecipeChange(recipe.id, { ...recipe, ...changes });
  }

  return (
    <div className="recipe-edit">
      <div className="recipe-edit__remove-button-container">
        <button className="btn recipe-edit__remove-button">&times;</button>
      </div>
      <div className="recipe-edit__details-grid">
        <lable htmlFor="name" className="recipe-edit__lable">
          Name
        </lable>
        <input
          type="text"
          name="name"
          id="name"
          className="recipe-edit__input"
          value={recipe.name}
          onInput={(e) => handleChange({ name: e.target.value })}
        />
        <lable className="recipe-edit__lable" htmlFor="cookTime">
          Cook Time
        </lable>
        <input
          type="text"
          name="cookTime"
          id="cookTime"
          className="recipe-edit__input"
          value={recipe.cookTime}
          onInput={(e) => handleChange({ cookTime: e.target.value })}
        />
        <lable className="recipe-edit__lable" htmlFor="servings">
          Servings
        </lable>
        <input
          type="text"
          name="servings"
          id="servings"
          min="1"
          className="recipe-edit__input"
          value={recipe.servings}
          onInput={(e) =>
            handleChange({ servings: parseInt(e.target.servings) || "" })
          }
        />
      </div>
      <br />
      <lable htmlFor="instructions" className="recipe-edit__lable">
        Instructions
      </lable>
      <textarea
        id="instructions"
        name="instructions"
        cols="30"
        rows="10"
        className="recipe-edit__input"
        value={recipe.instructions.join().replaceAll(",", "\n")}
      ></textarea>
      <br />
      <lable className="recipe-edit__lable">Ingredients</lable>
      <div className="recipe-edit__ingredient-grid">
        <div>Name</div>
        <div>Amount</div>
        <div>Delete</div>
        {recipe.ingredients.map((ingredient) => {
          return (
            <IngredientEdit key={ingredient.key} ingredient={ingredient} />
          );
        })}
      </div>
      <div>
        <button className="btn btn--primary btn--ing">Add Ingredient</button>
      </div>
    </div>
  );
}
