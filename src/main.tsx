import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import MyRouter from "./MyRouter.tsx";
import "./index.css";
import { RecipeProvider } from "./context/ReceipeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <RecipeProvider>
    <BrowserRouter>
      <StrictMode>
        <MyRouter />
      </StrictMode>
    </BrowserRouter>
  </RecipeProvider>,
);
