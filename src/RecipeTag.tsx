interface IRecipeTagProps {
    tagName: string;
    onSelectTag: (tagName: string) => void;
  }
  
  const RecipeTag = ({ tagName, onSelectTag }: IRecipeTagProps) => {
    return (
      <button onClick={() => onSelectTag(tagName)}>{tagName}</button>
    );
  };
  
  export default RecipeTag;
  