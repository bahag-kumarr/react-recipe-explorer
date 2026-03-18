import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import MyRouter from "./MyRouter.tsx"
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
    <StrictMode>
      <MyRouter />
    </StrictMode>
  </BrowserRouter>,
)
