import React, { useState, createContext, useEffect } from "react";
import RecipeList from "./component/RecipeList";
import "./css/app.css";
import { v4 as uuidv4 } from "uuid";

export const RecipeContext = createContext();
const LOCAL_STORAGE_KEY = "cookingWithReact.recipes";

function App() {
  const [recipes, setRecipes] = useState(sampleRecipe);

  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (recipeJSON != null) setRecipes(JSON.parse(recipeJSON));
  }, []);

  useEffect(() => {
    console.log("Render");
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: "New",
      servings: 1,
      cookTime: "1:00",
      instructions: ["Instr."],
      ingredients: [
        {
          id: uuidv4(),
          name: "Name",
          amount: "0 pound",
        },
      ],
    };

    setRecipes([...recipes, newRecipe]);
  }

  function handleRecipeDelete(id) {
    setRecipes(
      recipes.filter((recipe) => {
        return recipe.id !== id;
      })
    );
  }

  const recipeContextValue = {
    handleRecipeAdd: handleRecipeAdd,
    handleRecipeDelete: handleRecipeDelete,
  };

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes} />
    </RecipeContext.Provider>
  );
}

const sampleRecipe = [
  {
    id: 1,
    name: "Plain Chicken",
    servings: 3,
    cookTime: "1:45",
    instructions: ["Put salt on chicken", "Put chicken in oven", "Eat chicken"],
    ingredients: [
      {
        id: 1,
        name: "Chicken",
        amount: "2 pound",
      },
      {
        id: 2,
        name: "Onion",
        amount: "200 gram",
      },
    ],
  },
  {
    id: 2,
    name: "Plain Pork",
    servings: 2,
    cookTime: "2:30",
    instructions: ["Put salt on pork", "Put pork in oven", "Eat pork"],
    ingredients: [
      {
        id: 1,
        name: "Pork",
        amount: "2.5 pound",
      },
      {
        id: 2,
        name: "Onion",
        amount: "200 gram",
      },
      {
        id: 3,
        name: "Salt",
        amount: "2 tea spoon",
      },
    ],
  },
];

export default App;
