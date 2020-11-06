import React from "react";
import Ingredient from "./ingredientList";

export default function Recipe({
  name,
  cookTime,
  servings,
  instructions,
  ingredients,
}) {
  return (
    <div>
      <div>
        <h1>{name}</h1>
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
        <div>
          <span>Cook Time:</span>
          <span>{cookTime}</span>
        </div>
        <div>
          <span>Servings:</span>
          <span>{servings}</span>
        </div>
        <div>
          <span>Instruction:</span>
          <div>
            <ol>
              {instructions.map((instruction) => {
                return <li>{instruction}</li>;
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
