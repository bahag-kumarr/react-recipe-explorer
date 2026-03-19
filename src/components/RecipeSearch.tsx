import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router";
import Spinner from "./Spinner";
import axios from "axios"
import { type MealDetails, type ApiResponse } from "../models/models";
import { RecipeContext } from "../context/ReceipeContext";

const RecipeSearch = () => {
  const navigate = useNavigate();
  const context = useContext(RecipeContext)
  if (!context){
    return <h1>Could not fetch Recipes, context is empty</h1>
  }
  const {recipes, searchTerm, setSearchTerm, loading, error} = context;
  if (error){
    return <h1>{error}</h1>
  }
  if (loading){
    return <Spinner/>
  }
  return (
  <>
    {recipes?.map(meal => {
        return(
            <div key={meal.idMeal}>
                <h1><Link to={`/meal/${meal.idMeal}`}>{meal.strMeal}</Link></h1>
            </div>
        )
    })}
  </>);
};

export default RecipeSearch;
