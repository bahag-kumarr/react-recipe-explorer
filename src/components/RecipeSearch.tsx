import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router";
import Spinner from "./Spinner";
import axios from "axios"
import { type MealDetails, type ApiResponse } from "../models/models";

const RecipeSearch = () => {
  const navigate = useNavigate();
  const {searchTerm} = useParams();
  const [meals, setMeals] = useState<MealDetails[] | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const fetchRecipes = async () => {
    setLoading(true);
    if(!searchTerm){
        setError("No receipe (searchTerm) provided");
    }
    try{
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
        const data: ApiResponse = response.data
        console.log(response)
        setMeals(data.meals)
    
    }catch(err: any){
        setError(err);
    } finally{
        setLoading(false);
    }
  }
  useEffect(() => {
    fetchRecipes();
  }, [])

  if (error){
    return <h1>{error}</h1>
  }
  if (loading){
    return <Spinner/>
  }
  return (
  <>
    {meals?.map(meal => {
        return(
            <div key={meal.idMeal}>
                <h1><Link to={`/meal/${meal.idMeal}`}>{meal.strMeal}</Link></h1>
            </div>
        )
    })}
  </>);
};

export default RecipeSearch;
