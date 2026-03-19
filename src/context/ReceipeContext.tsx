import { type MealDetails, type ApiResponse } from "../models/models";
import { createContext, useState, type ReactNode } from "react";
import { useEffect } from "react";
import axios from "axios";

interface RecipesContextType {
  recipes: MealDetails[] | null;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  error: string;
}

interface Props {
  children: ReactNode;
}

export const RecipeContext = createContext<RecipesContextType | null>(null);

export const RecipeProvider = ({ children }: Props) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [recipes, setRecipes] = useState<MealDetails[] | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const fetchRecipes = async () => {
    console.log(`fetchRecipes() called`);
    setLoading(true);

    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`,
      );
      const data: ApiResponse = response.data;
      console.log(response);
      setRecipes(data.meals);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    console.log(`useEffect in RecipeContext called`)
    console.log("ping")
    if (!searchTerm) {
      console.log(`searchTerm is not set, value: ${searchTerm}`);
      return;
    }
    fetchRecipes();
  }, [searchTerm]);

  return (
    <RecipeContext.Provider
      value={{
        recipes,
        searchTerm,
        setSearchTerm,
        loading,
        error,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
