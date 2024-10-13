import Recipe from "./Recipe";

interface IRecipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  // Other recipe fields...
}

interface IRecipeListProps {
  recipes: IRecipe[];
}

const RecipeList = ({ recipes }: IRecipeListProps) => {
  return (
    <div>
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} recipeData={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
