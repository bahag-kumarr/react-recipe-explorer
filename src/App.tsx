import { useState } from "react";
import {useNavigate} from 'react-router'
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/recipes/${searchTerm}`)
  }

  return (
    <>
      <h1>Welcome to Recipe explorer</h1>
      <h3>Are you looking for a recipe. Look no further😁 </h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="Search for recipes..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} required />
          <button type="submit" className="ml-8">
            Search
          </button>
        </div>
      </form>
    </>
  );
}

export default App;
