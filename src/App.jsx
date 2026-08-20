import { useState } from 'react'
import Accueil from './components/pages/Accueil'
import { Route, Routes } from 'react-router'
import PageIngredients from './components/pages/PageIngredients'
import PageRecettes from './components/pages/PageRecettes'
import PageFavoris from './components/pages/PageFavoris'
import PageDetailRecette from './components/pages/PageDetailRecette'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Accueil/>}/>
        <Route path="/ingredients" element={<PageIngredients/>}/>
        <Route path="/recettes" element={<PageRecettes/>}/>
        <Route path="/favoris" element={<PageFavoris/>}/>
        <Route path="/recette/:id" element={<PageDetailRecette/>}/>
      </Routes>
    </>
  )
}

export default App
