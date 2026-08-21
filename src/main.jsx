import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import RecettesProvider from './components/contexts/RecettesContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <RecettesProvider>
        <App />
      </RecettesProvider>
    </BrowserRouter>
  </StrictMode>,
)
