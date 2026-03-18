import {Routes, Route} from 'react-router'
import App from './App';
import RecipeSearch from './components/RecipeSearch';
import MealComponent from './components/MealComponent';
const MyRouter = () => {
    return (
        <>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/recipes/:searchTerm" element={<RecipeSearch/>}/>
            <Route path='/meal/:mealId' element={<MealComponent/>}/>
            <Route path='*' element={<h1>Page n ot fou d</h1>}/>
        </Routes>
        </>
    );
}

export default MyRouter;