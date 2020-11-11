import React, { useContext } from "react";
import IngredientEdit from "./ingredientEdit";
import { RecipeContext } from "../App";
import { v4 as uuidv4 } from "uuid";

export default function RecipeEdit({ recipe }) {
  const { handleRecipeChange, handleRecipeSelect } = useContext(RecipeContext);

  function handleChange(changes) {
    handleRecipeChange(recipe.id, { ...recipe, ...changes });
  }

  function handleIngredientChange(id, ingredient) {
    const newIngredients = [...recipe.ingredients];
    const index = newIngredients.findIndex((i) => i.id === id);
    newIngredients[index] = ingredient;
    handleChange({ ingredients: newIngredients });
  }

  function handleIngredientAdd() {
    const newIngredients = {
      id: uuidv4(),
      name: "",
      amount: "",
    };
    handleChange({ ingredients: [...recipe.ingredients, newIngredients] });
  }
  function handleIngredientRemove(id) {
    handleChange({
      ingredients: recipe.ingredients.filter((i) => i.id !== id),
    });
  }

  return (
    <div className="recipe-edit">
      <div className="recipe-edit__remove-button-container">
        <button
          onClick={() => handleRecipeSelect(undefined)}
          className="btn recipe-edit__remove-button"
        >
          &times;
        </button>
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
          onChange={(e) => handleChange({ name: e.target.value })}
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
          onChange={(e) => handleChange({ cookTime: e.target.value })}
        />
        <lable className="recipe-edit__lable" htmlFor="servings">
          Servings
        </lable>
        <input
          type="number"
          name="servings"
          id="servings"
          min="1"
          className="recipe-edit__input"
          value={recipe.servings}
          onChange={(e) =>
            handleChange({ servings: parseInt(e.target.value) || 1 })
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
        onChange={(e) => {
          handleChange({ instructions: e.target.value.split("\n") });
        }}
      ></textarea>
      <br />
      <lable className="recipe-edit__lable">Ingredients</lable>
      <div className="recipe-edit__ingredient-grid">
        <div>Name</div>
        <div>Amount</div>
        <div>Delete</div>
        {recipe.ingredients.map((ingredient) => {
          return (
            <IngredientEdit
              key={ingredient.key}
              ingredient={ingredient}
              handleIngredientChange={handleIngredientChange}
              handleIngredientRemove={handleIngredientRemove}
            />
          );
        })}
      </div>
      <div>
        <button
          onClick={() => handleIngredientAdd()}
          className="btn btn--primary btn--ing"
        >
          Add Ingredient
        </button>
      </div>
    </div>
  );
}
