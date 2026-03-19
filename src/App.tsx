import { useContext, useState } from "react";
import {useNavigate} from 'react-router'
import "./App.css";
import { RecipeContext } from "./context/ReceipeContext";

function App() {
  const navigate = useNavigate();
  const context = useContext(RecipeContext)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchTerm = context
    navigate(`/recipes/${context?.searchTerm}`)
  }

  return (
    <>
      <h1>Welcome to Recipe explorer</h1>
      <h3>Are you looking for a recipe. Look no further😁 </h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="Search for recipes..." value={context?.searchTerm} onChange={(e) => context?.setSearchTerm(e.target.value)} required />
          <button type="submit" className="ml-8">
            Search
          </button>
        </div>
      </form>
    </>
  );
}

export default App;
