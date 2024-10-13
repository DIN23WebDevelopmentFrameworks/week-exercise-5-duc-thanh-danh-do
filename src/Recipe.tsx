interface IRecipeProps {
    recipeData: {
      id: number;
      name: string;
      ingredients: string[];
      instructions: string[];
      prepTimeMinutes: number;
      cookTimeMinutes: number;
      servings: number;
      difficulty: string;
    };
  }
  
  const Recipe = ({ recipeData }: IRecipeProps) => {
    return (
      <div>
        <h2>{recipeData.name}</h2>
        <p>Prep Time: {recipeData.prepTimeMinutes} minutes</p>
        <p>Cook Time: {recipeData.cookTimeMinutes} minutes</p>
        <p>Servings: {recipeData.servings}</p>
        <p>Difficulty: {recipeData.difficulty}</p>
        <h3>Ingredients</h3>
        <ul>
          {recipeData.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h3>Instructions</h3>
        <ol>
          {recipeData.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
    );
  };
  
  export default Recipe;
  