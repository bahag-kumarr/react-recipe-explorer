import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { type ApiResponse, type MealDetails } from "../models/models";
import axios from 'axios'


const url = `www.themealdb.com/api/json/v1/1/lookup.php?i=52772`
const MealComponent = () =>{
    const {mealId} = useParams();
    const [meal, setMeal] = useState<MealDetails | null>(null);
    const [error, setError] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
    
    const fetchUser = async () => {
        setLoading(true)
        if(!mealId){
            const str = "Meal Id not set"
            console.log(str)
            setError(str)
        }
        try{
            console.log(`Yahoo, it's the meal id: ${mealId}`)
            const resp = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
            const mealData: ApiResponse = resp.data
            console.log(mealData.meals[0])
            setMeal(mealData.meals[0])
        }catch(err : any){
            const str = `Error occured while fetching meal data: \n\n ${err.message}`
            console.log(str)
            setError(str)
        }finally{
            setLoading(false)
        }
    }

    useEffect(() =>{
        fetchUser();
    }, [])

    return (
        <>
        {error && <h1>{error}</h1>}
        {!loading && meal && (
            <>
                <h1>{meal.strMeal}</h1>
                <h3>{meal.strCategory}</h3>
                <h3>{meal.strArea}</h3>
            </>
        )}
        </>
    )
}

export default MealComponent;